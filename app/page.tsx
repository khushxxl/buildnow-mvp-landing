import { DockDemo } from "@/components/dock";
import Footer from "@/components/landing/footer";
import Founder from "@/components/landing/founder";
import Hero from "@/components/landing/hero";
import Pricing from "@/components/landing/pricing";
import Process from "@/components/landing/process";
import Projects from "@/components/landing/work";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";

function Home() {
  return (
    <div className=" w-full h-full">
      <Hero />
      <Projects />
      <Process />
      <Pricing />
      <Footer />
      {/* <Founder /> */}
      {/* <AnimatedGridPattern
        numSquares={100}
        maxOpacity={0.2}
        duration={1}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      /> */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />

      <div className="fixed bottom-10 left-0 right-0">
        <DockDemo />
      </div>
    </div>
  );
}

export default Home;
