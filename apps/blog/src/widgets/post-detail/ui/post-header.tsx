import type { Post } from "@/entities/post";

type PostHeaderProps = {
  post: Post;
};

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <div className="flex w-full flex-col gap-12">
      <div className="flex w-full flex-col gap-3">
        <h1 className="font-bold text-4xl text-black leading-9">{post.title}</h1>
        <p className="font-normal text-[#717182] text-base leading-4">
          {new Date(post.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {" • "}5 min read
        </p>
      </div>
      <div className="h-125 w-full rounded-xl bg-[#d9d9d9]" />
    </div>
  );
}
