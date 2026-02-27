import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import FloatingNav from "@/components/FloatingNav";
import ScrollRevealText from "@/components/ScrollRevealText";

const ProjectIndex = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Selected work");
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "Selected work") {
      return projects;
    }
    if (selectedCategory === "Archive") {
      return projects;
    }
    return projects;
  }, [selectedCategory]);

  return (
    <>
      <main className="min-h-screen bg-background page-transition">
        <Navbar 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        {/* Hero Bio Section - matching About page spacing */}
        <section className="min-h-[60vh] max-h-[70vh] flex flex-col justify-center px-6 pt-24 pb-8">
          <div className="max-w-[95%]">
            <ScrollRevealText 
              text="Art director based in Latvia, specializing in brand identities built on clarity and purpose."
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-display"
            />
          </div>
        </section>

        {/* Project Grid */}
        <section ref={sectionRef} className="pt-6 pb-24 px-6">
          {/* Mobile grid */}
          <div className={`grid ${selectedCategory === "Archive" ? "grid-cols-2" : "grid-cols-1"} gap-3 md:hidden`}>
            {filteredProjects.map((project, index) => {
              const Wrapper = selectedCategory === "Archive" ? "div" : Link;
              const wrapperProps = selectedCategory === "Archive"
                ? {}
                : { to: `/project/${project.id}` };
              return (
                <Wrapper
                  key={project.id}
                  {...(wrapperProps as any)}
                  className={`${selectedCategory !== "Archive" ? "project-card" : ""} group block transition-all duration-700 ${
                    selectedCategory !== "Archive" ? "cursor-pointer" : "cursor-default"
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-16"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className={`relative overflow-hidden rounded-xl bg-muted ${selectedCategory !== "Archive" ? "aspect-[16/9]" : ""}`}>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className={`w-full object-cover ${selectedCategory === "Archive" ? "h-auto" : "h-full"}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-2 pb-3">
                    <h3 className={`text-xs font-medium ${selectedCategory !== "Archive" ? "group-hover:opacity-70" : ""} transition-opacity duration-300`}>
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {project.subtitle || project.tags.slice(0, 2).map((tag) => `#${tag}`).join(" ")}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Desktop layout */}
          <div className={`hidden md:block ${selectedCategory === "Archive" ? "columns-3" : "columns-1"} gap-4`}>
            {filteredProjects.map((project, index) => {
              const Wrapper = selectedCategory === "Archive" ? "div" : Link;
              const wrapperProps = selectedCategory === "Archive" 
                ? {} 
                : { to: `/project/${project.id}` };
              return (
                <Wrapper
                  key={project.id}
                  {...(wrapperProps as any)}
                  className={`${selectedCategory !== "Archive" ? "project-card" : ""} group block mb-4 break-inside-avoid transition-all duration-700 ${
                    selectedCategory !== "Archive" ? "cursor-pointer" : "cursor-default"
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-16"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className={`relative overflow-hidden rounded-xl bg-muted ${selectedCategory === "Archive" ? "" : "aspect-[16/9]"}`}>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className={`w-full object-cover ${selectedCategory === "Archive" ? "h-auto" : "h-full"}`}
                      loading="lazy"
                    />
                  </div>

                  <div className="pt-3 pb-4">
                    <h3 className={`text-sm font-medium ${selectedCategory !== "Archive" ? "group-hover:opacity-70" : ""} transition-opacity duration-300`}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {project.subtitle || project.tags.map((tag) => `#${tag}`).join(" ")}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </section>
      </main>
      <FloatingNav />
    </>
  );
};

export default ProjectIndex;