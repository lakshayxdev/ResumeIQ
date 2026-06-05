const JobDescriptionInput = ({
  jobDescription,
  setJobDescription,
}) => {
  return (
    <textarea
      value={jobDescription}
      onChange={(e) =>
        setJobDescription(e.target.value)
      }
      placeholder="Paste Job Description Here..."
      className="
        w-full
        h-full
        min-h-250px
        rounded-2xl
        border
        border-white/10
        bg-white/0.03
        p-4
        text-white
        resize-none
        outline-none
        focus:border-violet-400/50
      "
    />
  );
};

export default JobDescriptionInput;