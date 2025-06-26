"use client"
import React from "react";

type Props = {
  formData: {
    languages: string;
    technologies: string;
    coreSubjects: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const SkillsSection: React.FC<Props> = ({ formData, handleChange }) => (
  <div className="mb-8">
    <h2 className="text-lg font-bold mb-2">💻 Technical Skills</h2>
    <textarea name="languages" value={formData.languages} onChange={handleChange} placeholder="Programming Languages" className="textarea" />
    <textarea name="technologies" value={formData.technologies} onChange={handleChange} placeholder="Technologies & Frameworks" className="textarea" />
    <textarea name="coreSubjects" value={formData.coreSubjects} onChange={handleChange} placeholder="Core Subjects" className="textarea" />
  </div>
);

export default SkillsSection; 