import { ArrowLeft, Save, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";

export function WritePostHeader() {
  return (
    <div className="flex w-full flex-col items-center justify-center border-black/10 border-b bg-white px-4">
      <div className="flex h-9.5 w-full items-center justify-between">
        {/* Back Button */}
        <Link
          href="/blog"
          className="flex items-center gap-2 text-[#717182] transition-colors hover:text-[#0a0a0a]">
          <ArrowLeft className="size-4" />
          <span className="font-normal text-sm">돌아가기</span>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-8 gap-2 text-[#0a0a0a]">
            <Save className="size-4" />
            <span className="font-normal text-sm">임시저장</span>
          </Button>
          <Button className="h-8 gap-2 bg-[#030213] text-white hover:bg-black/90">
            <Send className="size-4" />
            <span className="font-normal text-sm">발행하기</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
