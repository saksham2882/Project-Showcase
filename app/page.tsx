import { ProjectsShowcase } from "@/components/Projects-Showcase";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/Animated-Background";
import { ScrollToTop } from "@/components/Scroll-to-Top";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />

      <div className="relative z-10">
        <Header />

        <main className="flex-1">
          <ProjectsShowcase />
        </main>

        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
}
