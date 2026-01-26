import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { Post } from "@/entities/post";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex w-full flex-col gap-9">
      <div className="flex w-full items-center gap-6">
        {/* Image Placeholder */}
        <div className="size-24 shrink-0 rounded-xl bg-[#d9d9d9]" />

        {/* Content */}
        <div className="flex w-full flex-col items-start gap-2.5">
          {/* Top Section */}
          <div className="flex w-full flex-col items-start gap-3">
            {/* Badge */}
            <div className="flex h-5.5 items-center rounded-full bg-[rgba(3,2,19,0.1)] px-2.5">
              <span className="font-normal text-[#030213] text-xs leading-4">Development</span>
            </div>
            {/* Text */}
            <div className="flex w-full flex-col items-start gap-2">
              <h2 className="text-[#0a0a0a] text-base leading-6 tracking-tight">{post.title}</h2>
              <p className="line-clamp-2 text-[#717182] text-base leading-6 tracking-tight">{post.content}</p>
            </div>
          </div>

          {/* Meta & Link */}
          <div className="flex h-5 w-full items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="size-4 text-[#717182]" strokeWidth={1.5} />
                <span className="text-[#717182] text-sm leading-5 tracking-tight">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="size-4 text-[#717182]" strokeWidth={1.5} />
                <span className="text-[#717182] text-sm leading-5 tracking-tight">5 min read</span>
              </div>
            </div>

            <Link href={`/blog/${post.slug}`} className="group flex cursor-pointer items-center gap-2">
              <span className="text-[#030213] text-sm leading-5 tracking-tight">Read more</span>
              <ArrowRight className="size-4 text-[#030213] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-[#E5E5E5]" />
    </div>
  );
}
