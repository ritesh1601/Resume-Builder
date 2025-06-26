"use client"
import React from "react";

type Props = {
  formData: {
    projectName: string;
    projectDate: string;
    projectLiveUrl: string;
    projectGithubUrl: string;
    projectDescription: string;
    projectTechStack: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const ProjectsSection: React.FC<Props> = ({ formData, handleChange }) => (
  <div className="mb-8">
    <h2 className="text-lg font-bold mb-2">🚀 Projects</h2>
    <input name="projectName" value={formData.projectName} onChange={handleChange} placeholder="Project Name *" className="input" />
    <input name="projectDate" value={formData.projectDate} onChange={handleChange} placeholder="Date" className="input" />
    <input name="projectLiveUrl" value={formData.projectLiveUrl} onChange={handleChange} placeholder="Live Demo URL" className="input" />
    <input name="projectGithubUrl" value={formData.projectGithubUrl} onChange={handleChange} placeholder="GitHub URL" className="input" />
    <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} placeholder="Project Description (use | to separate points)" className="textarea" />
    <input name="projectTechStack" value={formData.projectTechStack} onChange={handleChange} placeholder="Tech Stack *" className="input" />
  </div>
);

export default ProjectsSection; 