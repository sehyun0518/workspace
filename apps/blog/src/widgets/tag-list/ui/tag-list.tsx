export function TagList() {
  // Mock data matching the design
  const tags = Array(8).fill({ name: "태그 A", count: 3 });

  return (
    <div className="flex w-full flex-col gap-6">
      <h3 className="font-normal text-black text-xs leading-tight">메인 태그</h3>
      <div className="flex w-full flex-col gap-2">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-start gap-5 text-xs leading-tight">
            <span className="text-black">{tag.name}</span>
            <span className="text-[#717182]">({tag.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
