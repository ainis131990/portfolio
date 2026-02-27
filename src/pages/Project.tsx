import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProjectById, projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import FloatingNav from "@/components/FloatingNav";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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

  // Find next and previous projects
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <main className="min-h-screen bg-background page-transition">
        <Navbar />

        {/* Hero Image */}
        <section className="pt-20 px-4 md:px-6">
          <div className="w-full h-[40vh] md:h-[80vh] overflow-hidden rounded-xl md:rounded-xl fade-in-up">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Project Info */}
        <section className="py-8 px-6">
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
        <section className="py-6 px-6">
          <div className="space-y-4">
            {project.images.slice(1).map((image, index) => (
              <div
                key={index}
                className="w-full overflow-hidden rounded-xl fade-in-up"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <img
                  src={image}
                  alt={`${project.title} - ${index + 2}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 px-6 border-t border-border">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <button
                onClick={() => navigate(`/project/${prevProject.id}`)}
                className="group flex items-center gap-3 text-left hover:opacity-70 transition-opacity duration-300"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Previous
                  </p>
                  <p className="text-sm">
                    {prevProject.title}
                  </p>
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextProject ? (
              <button
                onClick={() => navigate(`/project/${nextProject.id}`)}
                className="group flex items-center gap-3 text-right hover:opacity-70 transition-opacity duration-300"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Next
                  </p>
                  <p className="text-sm">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>
      <FloatingNav />
    </>
  );
};

export default Project;
