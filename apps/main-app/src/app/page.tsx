import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen px-6 pt-12">
      {/* Gradient blob */}
      <div
        className="absolute top-0 right-0 h-75 w-75 animate-pulse rounded-full bg-linear-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl">
        <h1 className="max-w-3xl font-light text-6xl leading-tight tracking-tight">
          SEHYUN&rsquo;s
          <br />
          DIGITAL WORKSPACE.
        </h1>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {/* Blog Card */}
          <Link
            href="/blog"
            className="group relative flex h-80 flex-col justify-between rounded-3xl border border-gray-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div>
              <h2 className="font-light text-3xl">BLOG</h2>
              <p className="mt-4 text-gray-600">
                Insights, tutorials, and thoughts on web development and design.
              </p>
            </div>
            <div className="flex items-center justify-between border-gray-200 border-t pt-6">
              <span className="font-medium text-sm">EXPLORE</span>
              <span className="rounded-full bg-black p-2 text-white transition-transform group-hover:rotate-45">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Portfolio Card */}
          <Link
            href="/portfolio"
            className="group relative flex h-80 flex-col justify-between rounded-3xl border border-gray-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div>
              <h2 className="font-light text-3xl">PORTFOLIO</h2>
              <p className="mt-4 text-gray-600">
                Showcase of my best projects, experiments, and creative works.
              </p>
            </div>
            <div className="flex items-center justify-between border-gray-200 border-t pt-6">
              <span className="font-medium text-sm">VIEW WORKS</span>
              <span className="rounded-full bg-black p-2 text-white transition-transform group-hover:rotate-45">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </div>
          </Link>
        </div>

        <div className="mt-24 flex justify-between pb-12">
          <div className="max-w-md">
            <p className="text-gray-600 text-sm leading-relaxed">
              CRAFTING DIGITAL EXPERIENCES
              <br />
              WITH NEXT.JS ECOSYSTEM
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
