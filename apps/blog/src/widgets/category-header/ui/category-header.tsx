export function CategoryHeader() {
  const tags = ["태그1", "태그1", "태그1", "태그1", "태그1"];

  return (
    <div className="mb-12 flex w-full flex-col items-center gap-3">
      {/* Row 1 */}
      <div className="flex items-center gap-4">
        {tags.map((tag, i) => (
          <div
            key={`${tag}-${i}`}
            className="flex items-center justify-center rounded-xl border border-[#e2e8f0] px-2 py-1">
            <span className="font-normal font-sans text-black text-sm leading-5">{tag}</span>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex items-center gap-4">
        {tags.slice(0, 3).map((tag, i) => (
          <div
            key={`${tag}-${i}`}
            className="flex items-center justify-center rounded-xl border border-[#e2e8f0] px-2 py-1">
            <span className="font-normal font-sans text-black text-sm leading-5">{tag}</span>
          </div>
        ))}
        {/* Empty placeholder from design */}
        <div className="h-7 w-12 rounded-xl border border-[#e2e8f0]" />
      </div>

      {/* Row 3 */}
      <div className="flex w-full items-center justify-center gap-4">
        {tags.map((tag, i) => (
          <div
            key={`${tag}-${i}`}
            className="flex items-center justify-center rounded-xl border border-[#e2e8f0] px-2 py-1">
            <span className="font-normal font-sans text-black text-sm leading-5">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
