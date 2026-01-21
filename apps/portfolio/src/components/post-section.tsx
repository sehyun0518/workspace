export function PostSection() {
  return (
    <section id="post" className="min-h-screen px-6 py-32 opacity-0 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12 sm:space-y-16">
        <h2 className="mb-16 translate-y-0 text-center text-muted-foreground text-sm uppercase tracking-wider opacity-100 transition-all duration-700 md:text-left">
          Recent Posts
        </h2>
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {[
            {
              title: "The Future of Web Development",
              excerpt: "Exploring how AI and automation are reshaping the way we build for the web.",
              date: "Dec 2024",
              readTime: "5 min",
            },
            {
              title: "Design Systems at Scale",
              excerpt:
                "Lessons learned from building and maintaining design systems across multiple products.",
              date: "Nov 2024",
              readTime: "8 min",
            },
            {
              title: "Performance-First Development",
              excerpt: "Why performance should be a first-class citizen in your development workflow.",
              date: "Oct 2024",
              readTime: "6 min",
            },
            {
              title: "The Art of Code Review",
              excerpt: "Building better software through thoughtful and constructive code reviews.",
              date: "Sep 2024",
              readTime: "4 min",
            },
          ].map((post, index) => (
            <article
              key={index}
              className="group cursor-pointer rounded-lg border border-border p-6 transition-all duration-500 hover:border-muted-foreground/50 hover:shadow-lg sm:p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-muted-foreground text-xs">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-medium text-lg transition-colors duration-300 group-hover:text-muted-foreground sm:text-xl">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center gap-2 text-muted-foreground text-sm transition-colors duration-300 group-hover:text-foreground">
                  <span>Read more</span>
                  <svg
                    className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
