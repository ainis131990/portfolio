import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectById, projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import FloatingNav from "@/components/FloatingNav";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <>
        <main className="min-h-screen bg-background">
          <Navbar />
          <div className="pt-40 pb-24 px-6 text-center">
            <h1 className="text-headline mb-4">Project not found</h1>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to Home
            </Link>
          </div>
        </main>
        <FloatingNav />
      </>
    );
  }


  return (
    <>
      <main className="min-h-screen bg-background page-transition">
        <Navbar />

        {/* Hero Image */}
        <section className="pt-20 px-2 md:px-3">
          <div className="w-full overflow-hidden fade-in-up">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Project Info */}
        <section className="py-8 px-3">
          <div className="max-w-4xl">
            <div className="fade-in-up fade-in-up-delay-1">
              <h1 className="text-xs md:text-sm font-medium">{project.title}</h1>
              <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-6 px-3">
          <div className="space-y-2">
            {(() => {
              const galleryImages = project.images.slice(1);
              const rows: React.ReactNode[] = [];
              let i = 0;
              let rowIndex = 0;

              while (i < galleryImages.length) {
                if (rowIndex % 2 === 0) {
                  // Full width row
                  rows.push(
                    <div
                      key={`row-${i}`}
className="w-full overflow-hidden fade-in-up"
                      style={{ animationDelay: `${(i + 4) * 100}ms` }}
                    >
                      <img
                        src={galleryImages[i]}
                        alt={`${project.title} - ${i + 2}`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  );
                  i += 1;
                } else {
                  // Two side-by-side
                  if (i + 1 < galleryImages.length) {
                    rows.push(
                      <div key={`row-${i}`} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div
className="overflow-hidden fade-in-up"
                          style={{ animationDelay: `${(i + 4) * 100}ms` }}
                        >
                          <img
                            src={galleryImages[i]}
                            alt={`${project.title} - ${i + 2}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div
className="overflow-hidden fade-in-up"
                          style={{ animationDelay: `${(i + 5) * 100}ms` }}
                        >
                          <img
                            src={galleryImages[i + 1]}
                            alt={`${project.title} - ${i + 3}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    );
                    i += 2;
                  } else {
                    // Only one image left, show full width
                    rows.push(
                      <div
                        key={`row-${i}`}
className="w-full overflow-hidden fade-in-up"
                      style={{ animationDelay: `${(i + 4) * 100}ms` }}
                    >
                      <img
                        src={galleryImages[i]}
                        alt={`${project.title} - ${i + 2}`}
                        className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                    );
                    i += 1;
                  }
                }
                rowIndex++;
              }

              return rows;
            })()}
          </div>
        </section>

        {/* Next/Previous Project */}
        {(() => {
          const currentIndex = projects.findIndex(p => p.id === id);
          const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
          const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

          return (
            <section className="pb-24 px-3">
              <div className="flex justify-between items-center border-t border-border pt-6">
                <div>
                  {prevProject && (
                    <Link to={`/project/${prevProject.id}`} className="group">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Previous</span>
                      <p className="text-xs md:text-sm font-medium group-hover:text-muted-foreground transition-colors">{prevProject.title}</p>
                    </Link>
                  )}
                </div>
                <div className="text-right">
                  {nextProject && (
                    <Link to={`/project/${nextProject.id}`} className="group">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Next</span>
                      <p className="text-xs md:text-sm font-medium group-hover:text-muted-foreground transition-colors">{nextProject.title}</p>
                    </Link>
                  )}
                </div>
              </div>
            </section>
          );
        })()}

      </main>
      <FloatingNav />
    </>
  );
};

export default Project;
