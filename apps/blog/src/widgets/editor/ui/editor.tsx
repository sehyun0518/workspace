import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Image as ImageIcon,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote,
  Upload,
} from "lucide-react";
import { Button } from "@/shared/components/ui/button";

const DEFAULT_CONTENT = `내용을 입력하세요...

# 제목을 작성하려면
## 하위 제목

**굵은 글씨** *기울임* 
\`코드\`

- 순서 없는 목록
1. 순서 있는 목록

> 인용문

[링크](url)
![이미지](image-url)`;

export function Editor() {
  return (
    <div className="flex h-full w-full flex-col gap-4 px-4 pb-4">
      {/* Title Input */}
      <input
        type="text"
        placeholder="제목을 입력하세요"
        className="w-full bg-transparent font-bold text-4xl text-[#717182] outline-none placeholder:text-[#717182]/50"
      />

      {/* Tag Input */}
      <input
        type="text"
        placeholder="태그를 입력하세요 (쉼표로 구분)"
        className="w-full bg-transparent text-[#717182] text-sm outline-none placeholder:text-[#717182]/50"
      />

      {/* Thumbnail Area */}
      <div className="w-full rounded-xl border border-black/10 bg-white p-4">
        <h3 className="mb-4 font-medium text-[#0a0a0a] text-sm">썸네일 이미지</h3>
        <div className="flex h-48 w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-black/10 border-dashed bg-[#ECECF0]/30 transition-colors hover:bg-[#ECECF0]/50">
          <div className="flex size-12 items-center justify-center rounded-full bg-black/10">
            <Upload className="size-6 text-[#717182]" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#0a0a0a] text-sm">썸네일 이미지 추가</span>
            <span className="text-[#717182] text-xs">클릭하여 이미지 URL 입력</span>
          </div>
        </div>
      </div>

      <div className="my-4 h-px w-full bg-black/10" />

      {/* Editor Main */}
      <div className="flex w-full flex-1 flex-col overflow-hidden rounded-xl border border-black/10 bg-white">
        {/* Toolbar */}
        <div className="flex flex-col border-black/10 border-b">
          <div className="flex items-center gap-1 border-black/10 border-b bg-[#ECECF0]/30 p-2">
            <Button variant="ghost" size="icon" className="size-8 rounded">
              <Heading1 className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-8 rounded">
              <Heading2 className="size-4" />
            </Button>
            <div className="mx-1 h-6 w-px bg-black/10" />
            <Button variant="ghost" size="icon" className="size-8 rounded">
              <Bold className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-8 rounded">
              <Italic className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-8 rounded">
              <Code className="size-4" />
            </Button>
            <div className="mx-1 h-6 w-px bg-black/10" />
            <Button variant="ghost" size="icon" className="size-8 rounded">
              <LinkIcon className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-8 rounded">
              <ImageIcon className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-8 rounded">
              <Quote className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-8 rounded">
              <List className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-8 rounded">
              <ListOrdered className="size-4" />
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex h-10 items-center justify-between px-4">
            <div className="flex h-full">
              <button className="h-full border-[#030213] border-b-2 px-4 font-medium text-[#0a0a0a] text-sm">
                Edit
              </button>
              <button className="h-full px-4 font-medium text-[#717182] text-sm">Preview</button>
            </div>
            <span className="text-[#717182] text-xs">마크다운으로 작성하기</span>
          </div>
        </div>

        {/* Text Area */}
        <textarea
          className="w-full flex-1 resize-none p-6 text-sm leading-relaxed outline-none"
          placeholder="내용을 입력하세요..."
          defaultValue={DEFAULT_CONTENT}
        />
      </div>

      {/* Footer Status */}
      <div className="flex w-full items-center justify-between text-[#717182] text-xs">
        <span>글자 수: 0</span>
        <span>마지막 저장: 저장된 내용 없음</span>
      </div>
    </div>
  );
}
