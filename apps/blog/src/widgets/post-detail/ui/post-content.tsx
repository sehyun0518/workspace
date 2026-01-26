import type { Post } from "@/entities/post";

type PostContentProps = {
  post: Post;
};

export function PostContent({ post }: PostContentProps) {
  return (
    <div className="w-full max-w-170">
      <p className="whitespace-pre-wrap font-normal text-base text-black leading-6 tracking-tight">
        {post.content}
      </p>
    </div>
  );
}
