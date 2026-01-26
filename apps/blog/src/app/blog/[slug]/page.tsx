import { notFound } from "next/navigation";
import { getPostBySlug } from "@/entities/post/model";
import { CommentSection } from "@/widgets/comment-section";
import { PostContent, PostHeader } from "@/widgets/post-detail";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-12">
      <PostHeader post={post} />
      <PostContent post={post} />
      <CommentSection />
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}
