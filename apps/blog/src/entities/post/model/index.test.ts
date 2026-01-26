import { describe, expect, it } from "vitest";
import { getAllPosts, getPostBySlug } from "./index";

describe("Post entity model", () => {
  it("should return all posts", async () => {
    const posts = await getAllPosts();
    expect(posts).toHaveLength(2);
    expect(posts[0]).toHaveProperty("title", "First Post");
  });

  it("should return a post by its slug", async () => {
    const post = await getPostBySlug("first-post");
    expect(post).not.toBeUndefined();
    expect(post).toHaveProperty("title", "First Post");
  });

  it("should return undefined for a non-existent slug", async () => {
    const post = await getPostBySlug("non-existent-post");
    expect(post).toBeUndefined();
  });
});
