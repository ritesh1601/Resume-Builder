"use client";
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
  <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <span className="mr-2">💻</span> Technical Skills
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="skill-category">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Programming Languages
          <span className="text-xs text-gray-500 block">(Comma separated)</span>
        </label>
        <textarea
          name="languages"
          value={formData.languages}
          onChange={handleChange}
          placeholder="e.g., JavaScript, Python, Java"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-32"
        />
        <div className="mt-1 text-xs text-gray-500">
          {formData.languages.split(',').filter(Boolean).length} languages added
        </div>
      </div>

      <div className="skill-category">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Technologies & Frameworks
          <span className="text-xs text-gray-500 block">(Comma separated)</span>
        </label>
        <textarea
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          placeholder="e.g., React, Node.js, TensorFlow"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-32"
        />
        <div className="mt-1 text-xs text-gray-500">
          {formData.technologies.split(',').filter(Boolean).length} technologies added
        </div>
      </div>

      <div className="skill-category">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Core Subjects
          <span className="text-xs text-gray-500 block">(Comma separated)</span>
        </label>
        <textarea
          name="coreSubjects"
          value={formData.coreSubjects}
          onChange={handleChange}
          placeholder="e.g., Data Structures, Algorithms, Database Systems"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-32"
        />
        <div className="mt-1 text-xs text-gray-500">
          {formData.coreSubjects.split(',').filter(Boolean).length} subjects added
        </div>
      </div>
    </div>

    <div className="mt-4 text-sm text-gray-600">
      <p>💡 Tip: Use commas to separate multiple skills. Keep your most relevant skills first.</p>
    </div>
  </div>
);

export default SkillsSection;