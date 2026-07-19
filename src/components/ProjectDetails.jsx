import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SEO from "./SEO";
import { styles } from "../styles";
import { projects } from "../constants";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[parseInt(id, 10)];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className={`mt-24 ${styles.padding} max-w-7xl mx-auto relative z-0 text-white`}>
        <h2 className={styles.sectionHeadText}>Project Not Found</h2>
        <button onClick={() => navigate("/projects")} className="mt-4 bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">Back to Projects</button>
      </div>
    );
  }

  // Generate dynamic schema
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.name,
    "description": project.description,
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className={`mt-24 ${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <SEO 
        title={`${project.name} | Project`} 
        description={project.description} 
        url={`/projects/${id}`} 
        schema={projectSchema}
      />
      <button onClick={() => navigate("/projects")} className="mb-8 text-secondary hover:text-white transition-colors">
        ← Back to Projects
      </button>

      <h2 className={styles.sectionHeadText}>{project.name}.</h2>
      
      <div className="mt-8 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-2/3">
          <img
            src={project.image}
            alt={project.name}
            className="w-full rounded-2xl shadow-card"
          />
        </div>
        
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-tertiary p-6 rounded-2xl">
            <h3 className="text-white text-[20px] font-bold mb-4">About</h3>
            <p className="text-secondary leading-relaxed">{project.description}</p>
          </div>

          <div className="bg-tertiary p-6 rounded-2xl">
            <h3 className="text-white text-[20px] font-bold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag.name} className={`px-3 py-1 rounded-full text-[14px] ${tag.color} bg-black/20`}>
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {project.live_site_link && (
              <a
                href={project.live_site_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#915EFF] hover:bg-white hover:text-[#915EFF] text-white py-3 px-6 rounded-xl font-bold transition-all shadow-md flex-1 text-center"
              >
                Live Demo
              </a>
            )}
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black-100 hover:bg-[#915EFF] text-white py-3 px-6 rounded-xl font-bold transition-all shadow-md flex-1 text-center"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Future feature sections as requested */}
      <div className="mt-12 bg-tertiary p-8 rounded-2xl">
        <h3 className="text-white text-[24px] font-bold mb-4">Architecture & Features</h3>
        <p className="text-secondary">Detailed architecture diagrams, core features list, and future improvement plans will go here. (Placeholder for expansion).</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
