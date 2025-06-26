"use client";
type Project = {
  id: string;
  projectName: string;
  projectDate: string;
  projectLiveUrl: string;
  projectGithubUrl: string;
  projectDescription: string;
  projectTechStack: string;
};

type Props = {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
};

const ProjectsSection: React.FC<Props> = ({ projects, setProjects }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => {
    const { name, value } = e.target;
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, [name]: value } : project
      )
    );
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        id: Date.now().toString(),
        projectName: "",
        projectDate: "",
        projectLiveUrl: "",
        projectGithubUrl: "",
        projectDescription: "",
        projectTechStack: "",
      },
    ]);
  };

  const removeProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">🚀 Projects</h2>
        <button
          type="button"
          onClick={addProject}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          Add Project
        </button>
      </div>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 relative"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-700">
              Project {index + 1}
            </h3>
            {projects.length > 1 && (
              <button
                type="button"
                onClick={() => removeProject(project.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Name *
              </label>
              <input
                name="projectName"
                value={project.projectName}
                onChange={(e) => handleChange(e, project.id)}
                placeholder="My Awesome Project"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                name="projectDate"
                value={project.projectDate}
                onChange={(e) => handleChange(e, project.id)}
                placeholder="MM/YYYY or Present"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Live Demo URL
              </label>
              <input
                name="projectLiveUrl"
                value={project.projectLiveUrl}
                onChange={(e) => handleChange(e, project.id)}
                placeholder="https://example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GitHub URL
              </label>
              <input
                name="projectGithubUrl"
                value={project.projectGithubUrl}
                onChange={(e) => handleChange(e, project.id)}
                placeholder="https://github.com/username/repo"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description (use | to separate points)
            </label>
            <textarea
              name="projectDescription"
              value={project.projectDescription}
              onChange={(e) => handleChange(e, project.id)}
              placeholder="Developed a web app using React and Node.js|Implemented user authentication|Deployed on AWS"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tech Stack *
            </label>
            <input
              name="projectTechStack"
              value={project.projectTechStack}
              onChange={(e) => handleChange(e, project.id)}
              placeholder="React, Node.js, MongoDB, etc."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;