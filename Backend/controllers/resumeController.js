const fs = require("fs");
const pdfParse = require("pdf-parse");

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
  "atsScore": must be valid integer from 0-100,
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