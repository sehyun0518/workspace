import type { Post } from "./types";

const DUMMY_POSTS: Post[] = [
  {
    id: "1",
    title: "First Post",
    slug: "first-post",
    content: "This is the content of the first post.",
    authorId: "user1",
    createdAt: "2023-01-01T10:00:00Z",
    updatedAt: "2023-01-01T10:00:00Z",
  },
  {
    id: "2",
    title: "Second Post",
    slug: "second-post",
    content: "This is the content of the second post.",
    authorId: "user1",
    createdAt: "2023-01-05T11:00:00Z",
    updatedAt: "2023-01-05T11:00:00Z",
  },
];

export async function getAllPosts(): Promise<Post[]> {
  return DUMMY_POSTS;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return DUMMY_POSTS.find((post) => post.slug === slug);
}
