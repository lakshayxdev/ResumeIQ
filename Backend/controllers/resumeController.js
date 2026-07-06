const fs = require("fs");
const pdfParse = require("pdf-parse");
const Analysis = require("../models/analysisModel");
const client = require("../utils/ai");

const uploadResume = async (req, res) => {
  try {
    console.log("REQ.FILE =", req.file);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file received by backend",
      });
    }

    if (!req.body.jobDescription) {
      return res.status(400).json({
        success: false,
        message: "Job Description is required",
      });
    }

    const filePath = req.file.path;

    const dataBuffer = fs.readFileSync(filePath);

    const pdfData = await pdfParse(dataBuffer);

    const extractedText = pdfData.text;

    const cleanedText = extractedText
      .replace(/\s+/g, " ")
      .trim();

    const limitedText = cleanedText.slice(0, 4000);

    console.log("Before AI Call");

    const completion =
      await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content:
              "You are an ATS Resume Analyzer. Always return valid JSON only.",
          },
          {
            role: "user",
            content: `
Analyze the resume according to the given job description.

Resume:
${limitedText}

Job Description:
${req.body.jobDescription}

Return ONLY valid JSON in this exact format:

{
  "role": "",
  "atsScore": 0,
  "matchedSkills": [],
  "missingSkills": [],
  "strengths": [],
  "weaknesses": [],
  "suggestions": [],
  "jobFitpercent": ""
}
`,
          },
        ],

        temperature: 0.3,

        response_format: {
          type: "json_object",
        },
      });

    console.log("AI Response Received");

    const response =
      completion.choices[0].message.content;

    const parsedResponse =
      JSON.parse(response);

//       await History.create({
//   user: req.userId,
//   resumeName: req.file.originalname,
//   role: result.role,           // or result.jobRole depending on your AI response
//   atsScore: result.atsScore,   // whatever field contains the final ATS score
// });

      await Analysis.create({
  user: req.userId,
  resumeName: req.file.originalname,
  role: parsedResponse.role,
  atsScore: parsedResponse.atsScore,
  strengths: parsedResponse.strengths,
  weaknesses: parsedResponse.weaknesses,
  missingSkills: parsedResponse.missingSkills,
  suggestions: parsedResponse.suggestions,
});

    return res.json({
      success: true,
      analysis: parsedResponse,
    });

  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = uploadResume;