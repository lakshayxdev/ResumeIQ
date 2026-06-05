const SectionHeading = ({
  title,
  subtitle,
  center = false,
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;