import { RecommendedPosts } from "@/widgets/recommended-posts";
import { TagList } from "@/widgets/tag-list";

export function BlogSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col gap-12 lg:flex">
      <TagList />
      <RecommendedPosts />
    </aside>
  );
}
