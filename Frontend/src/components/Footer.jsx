const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <h2 className="text-white font-semibold">
            ResumeIQ
          </h2>

          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} ResumeIQ.
            All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
  Crafted with ❤️ by{" "}
  <span className="text-cyan-400 font-medium">
    Lakshay
  </span>
</p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;