import Image from "next/image";

export function ProjectSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      tags: ["Web Design", "Development", "Branding"],
      image: "/modern-ecommerce-website.png",
    },
    {
      title: "Mobile Banking App",
      tags: ["UI/UX", "Mobile", "Fintech"],
      image: "/mobile-banking-app.png",
    },
    {
      title: "SaaS Dashboard",
      tags: ["Web Design", "Data Viz", "SaaS"],
      image: "/modern-dashboard-analytics.jpg",
    },
    {
      title: "Brand Identity",
      tags: ["Branding", "Logo Design", "Print"],
      image: "/brand-identity-design-mockup.jpg",
    },
  ];

  return (
    <section id="project" className="px-6 py-32 opacity-0 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 translate-y-0 text-center text-muted-foreground text-sm uppercase tracking-wider opacity-100 transition-all duration-700 md:text-left">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group translate-y-0 cursor-pointer text-center opacity-100 transition-all duration-700 md:text-left"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
              <div className="relative mb-4 aspect-3/2 overflow-hidden rounded-lg bg-muted">
                <Image
                  width={1024}
                  height={1024}
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 font-semibold text-xl">{project.title}</h3>
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-muted px-3 py-1 text-muted-foreground text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
