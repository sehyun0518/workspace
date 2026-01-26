import { ChevronUp, Github, Smile } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

export function CommentSection() {
  return (
    <div className="mt-12 flex w-full flex-col gap-4 border-black/10 border-t pt-12">
      {/* Header */}
      <div className="flex w-full items-center justify-between border-black/10 border-b pb-3">
        <div className="flex items-center gap-2">
          <span className="font-medium text-[#0a0a0a] text-sm">댓글 1개</span>
          <span className="text-[#717182] text-sm"> — Powered by giscus</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-8.5 text-sm">
            오래된 순
          </Button>
          <Button variant="outline" size="sm" className="h-8.5 text-sm">
            새로운 순
          </Button>
        </div>
      </div>

      {/* Comment Item */}
      <div className="w-full rounded-xl border border-black/10 bg-white p-4">
        <div className="flex w-full items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-black/10">
            <span className="font-medium text-[#030213] text-sm">P</span>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#0a0a0a] text-sm">parkarck</span>
              <span className="text-[#717182] text-xs">어제</span>
            </div>
            <p className="mt-2 text-[#0a0a0a] text-sm">
              이미지 찍은 관심이 별로 없어 잘 안 봤는데, 도움이 많이 되었습니다!
            </p>
            <div className="mt-3 flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-[#717182] transition-colors hover:text-black">
                <ChevronUp className="size-4" />
                <span className="text-sm">1</span>
              </button>
              <button className="text-[#717182] transition-colors hover:text-black">
                <Smile className="size-4" />
              </button>
              <button className="text-[#717182] text-sm transition-colors hover:text-black">답글 0개</button>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="flex w-full flex-col overflow-hidden rounded-xl border border-black/10 bg-white">
        <div className="flex border-black/10 border-b">
          <button className="border-[#030213] border-b-2 px-4 py-2.5 font-medium text-[#0a0a0a] text-sm">
            작성하기
          </button>
          <button className="px-4 py-2.5 font-medium text-[#717182] text-sm">미리보기</button>
          <div className="ml-auto flex items-center pr-4">
            <span className="text-[#717182] text-sm">Aa</span>
          </div>
        </div>

        <div className="min-h-30 p-4">
          <p className="text-[#717182] text-sm">로그인하고 댓글 작성하기</p>
        </div>

        <div className="flex items-center justify-between border-black/10 border-t bg-black/2 p-4">
          <Button variant="outline" className="h-9.5 text-sm">
            Comments
          </Button>
          <Button className="h-9 gap-2 bg-[#030213] text-white hover:bg-black/90">
            <Github className="size-4" />
            GitHub으로 로그인
          </Button>
        </div>
      </div>
    </div>
  );
}
