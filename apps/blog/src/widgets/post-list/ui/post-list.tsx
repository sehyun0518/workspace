import { PostCard } from "./post-card";
import { PostPagination } from "./post-pagination";
import { getAllPosts } from "@/entities/post/model";

export async function PostList() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <PostPagination />
    </div>
  );
}
