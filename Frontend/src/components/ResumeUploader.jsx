import { Upload } from "lucide-react";
import toast from "react-hot-toast";

const ResumeUploader = ({
  resume,
  setResume,
}) => {
  const handleChange = (e) => {
    setResume(e.target.files[0]);
    toast.success("Resume uploaded");
  };

  return (
    <div className="border border-dashed border-violet-500/30 rounded-2xl p-8 text-center bg-white/0.02">

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        className="hidden"
        id="resume-upload"
      />

      <label
        htmlFor="resume-upload"
        className="cursor-pointer flex flex-col items-center"
      >
        <Upload
          size={40}
          className="text-violet-400 mb-4"
        />

        <h3 className="text-white font-semibold">
          Upload Resume
        </h3>

        <p className="text-slate-400 text-sm mt-2">
          PDF, DOC, DOCX
        </p>

       {resume && (
  <div
    className="
      mt-6
      p-4
      rounded-2xl
      border
      border-violet-500/20
      bg-violet-500/5
      flex
      items-center
      gap-4
    "
  >
    <div
      className="
        w-12
        h-12
        rounded-xl
        bg-violet-500/10
        flex
        items-center
        justify-center
        text-2xl
      "
    >
      📄
    </div>

    <div className="text-left">
      <p className="text-violet-400 font-semibold">
        Resume Uploaded
      </p>

      <p className="text-white text-sm truncate max-w-xs">
        {resume.name}
      </p>

      <p className="text-slate-400 text-xs">
        {(resume.size / 1024).toFixed(1)} KB
      </p>
    </div>
  </div>
)}
      </label>

    </div>
  );
};

export default ResumeUploader;