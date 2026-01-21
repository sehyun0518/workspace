import { AboutSection } from "@/components/about-section";
import { ConnectSection } from "@/components/connect-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { PostSection } from "@/components/post-section";
import { ProjectSection } from "@/components/project-section";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PostSection />
      <ProjectSection />
      <ConnectSection />
      <Footer />
    </main>
  );
}
