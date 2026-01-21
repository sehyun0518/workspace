export function AboutSection() {
  const skills = [
    "Web Development",
    "React & Next.js",
    "Architecture",
    "Prototyping",
    "Design with Figma",
    "Notion & Slack",
  ];
  return (
    <section id="about" className="min-h-screen px-6 py-32 opacity-0 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 translate-y-0 text-center text-muted-foreground text-sm uppercase tracking-wider opacity-100 transition-all duration-700 md:text-left">
          About Me
        </h2>

        <div className="grid gap-16 md:grid-cols-2">
          <div className="translate-y-0 space-y-6 text-center opacity-100 transition-all delay-100 duration-700 md:text-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              사용자 경험을 디자인하고 기술로 실현하는 개발자입니다.
              <br />
              위대한 디자인은 사용자가 의식하지 못할 만큼 자연스러워야 한다고 믿습니다. 저는 기획의 논리와
              개발의 구조를 하나로 연결하는 데 집중합니다. 단순히 코드를 작성하는 것을 넘어, 시각적 아름다움과
              기능적 완결성을 동시에 갖춘 &rsquo;살아있는 서비스&rsquo;를 만듭니다.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              기획과 디자인을 코드로 연결하는 &rsquo;브릿지&rsquo; 개발자가 되고자 합니다. <br />
              FSD 아키텍처 설계부터 마이크로 서비스 구현까지, 비즈니스 목표를 실제 동작하는 제품으로 만드는
              과정에 몰입합니다.
            </p>
          </div>

          <div className="translate-y-0 text-center opacity-100 transition-all delay-200 duration-700 md:text-left">
            <h3 className="mb-6 text-muted-foreground text-sm uppercase tracking-wider">Skills & Services</h3>
            <ul className="space-y-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center justify-center gap-3 text-foreground md:justify-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
