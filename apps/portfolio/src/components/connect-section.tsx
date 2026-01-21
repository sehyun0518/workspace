import Link from "next/link";

export function ConnectSection() {
  return (
    <section id="connect" className="min-h-screen px-6 py-32 opacity-0 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 sm:gap-16 lg:grid-cols-2">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="font-light text-3xl sm:text-4xl">Let&apos;s Connect</h2>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl">
              기술과 디자인에 대한 소통, 새로운 기회와 협업 제안을 기다립니다.
            </p>

            <div className="space-y-4">
              <Link
                href="mailto:rla6170@naver.com"
                className="group flex items-center gap-3 text-foreground transition-colors duration-300 hover:text-muted-foreground">
                <span className="text-base sm:text-lg">rla6170@naver.com</span>
                <svg
                  className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
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
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="font-mono text-muted-foreground text-sm">ELSE WHERE</div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                name: "GitHub",
                handle: "@sehyun0518",
                url: "https://github.com/sehyun0518",
              },
              { name: "blog", handle: "개인 블로그", url: "#" },
              {
                name: "LinkedIn",
                handle: "김세현",
                url: "https://www.linkedin.com/in/%EC%84%B8%ED%98%84-%EA%B9%80-2b83a6292/",
              },
            ].map((social) => (
              <Link
                target="_blank"
                key={social.name}
                href={social.url}
                className="group rounded-lg border border-border p-4 transition-all duration-300 hover:border-muted-foreground/50 hover:shadow-sm">
                <div className="space-y-2">
                  <div className="text-foreground transition-colors duration-300 group-hover:text-muted-foreground">
                    {social.name}
                  </div>
                  <div className="text-muted-foreground text-sm">{social.handle}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
