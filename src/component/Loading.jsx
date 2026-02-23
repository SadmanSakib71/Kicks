const Loading = ({ className = "" }) => (
  <div
    className={`flex flex-col items-center justify-center gap-3 py-12 text-[#2E2E2E] ${className}`}
    aria-live="polite"
    aria-busy="true"
  >
    <i className="fas fa-spinner fa-spin text-3xl text-[#4C7AF2]" aria-hidden />
    <span className="text-sm font-medium uppercase tracking-wide">Loading...</span>
  </div>
);

export default Loading;
