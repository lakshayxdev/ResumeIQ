import jsPDF from "jspdf";
import toast from "react-hot-toast";

export const downloadPDF = (analysis) => {
     console.log("PDF Analysis:", analysis);
  const pdf = new jsPDF();

  let y = 20;

  pdf.setFontSize(22);
  pdf.text("ResumeIQ", 20, y);

  y += 10;

  pdf.setFontSize(12);
  pdf.text(
    "AI Resume Analysis Report",
    20,
    y
  );

  y += 10;

  pdf.text(
    `ATS Score: ${analysis.atsScore}%`,
    20,
    y
  );

  y += 7;

  pdf.text(
    `Job Match: ${analysis.jobFitpercent}`,
    20,
    y
  );

  y += 10;

  pdf.text("Matched Skills:", 20, y);

  y += 10;

  analysis.matchedSkills?.forEach(
    (skill) => {
      pdf.text(`• ${skill}`, 30, y);
      y += 8;
    }
  );

  y += 7;

  pdf.text("Missing Skills:", 20, y);

  y += 7;

  analysis.missingSkills?.forEach(
    (skill) => {
      pdf.text(`• ${skill}`, 30, y);
      y += 8;
    }
  );

  y += 7;

  pdf.text("Strengths:", 20, y);

  y += 7;

  analysis.strengths?.forEach(
    (item) => {
      pdf.text(`• ${item}`, 30, y);
      y += 8;
    }
  );

  y += 7;

  pdf.text("Weaknesses:", 20, y);

  y += 7;

  analysis.weaknesses?.forEach(
    (item) => {
      pdf.text(`• ${item}`, 30, y);
      y += 8;
    }
  );

  y += 7;

  pdf.text("AI Suggestions:", 20, y);

  y += 7;

  analysis.suggestions?.forEach(
    (item) => {
      pdf.text(`• ${item}`, 30, y);
      y += 8;
    }
  );

  pdf.save("ResumeIQ-Report.pdf");
  toast.success("Report downloaded");
};