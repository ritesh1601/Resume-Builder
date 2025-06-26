"use client"
import React, { useState, useEffect } from "react";
import { User, GraduationCap, Briefcase, Code, Trophy, Users } from "lucide-react";
import PersonalInfoSection from "./sections/PersonalInfoSection";
import EducationSection from "./sections/EducationSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import InternshipsSection from "./sections/InternshipsSection";
import AchievementsSection from "./sections/AchievementsSection";
import ClubsSection from "./sections/ClubsSection";
import generateLatex, { FormData } from "../utils/generateLatex";
import { sectionFields } from "../lib/constants";
import SectionCard from "./SectionCard";

const Form =() => {
  const [internships, setInternships] = useState([
    {
      id: Date.now().toString(),
      company: "",
      duration: "",
      role: "",
      location: "",
      responsibilities: "",
    },
  ]);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    location: "",
    website: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    codeforces: "",
    leetcode: "",
    geeksforgeeks: "",
    education: [
      {
        educationInstitution: "",
        educationDuration: "",
        educationDegree: "",
        educationGrade: "",
        educationLocation: "",
      },
    ],
    projects: [
      {
        id: Date.now().toString(),
        projectName: "",
        projectDate: "",
        projectLiveUrl: "",
        projectGithubUrl: "",
        projectDescription: "",
        projectTechStack: "",
      },
    ],
    internships: internships,
    languages: "",
    technologies: "",
    coreSubjects: "",
    achievements: "",
    clubInvolvements: "",
  });

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    personal: true,
    education: false,
    projects: false,
    skills: false,
    internships: false,
    achievements: false,
    clubs: false,
  });

  const [completedSections, setCompletedSections] = useState<Record<string, boolean>>({
    personal: false,
    education: false,
    projects: false,
    skills: false,
    internships: false,
    achievements: false,
    clubs: false,
  });

  const [latex, setLatex] = useState<string>("");
  const [copyStatus, setCopyStatus] = useState<string>('idle');

  useEffect(() => {
    setFormData((prev) => ({ ...prev, internships }));
  }, [internships]);

  useEffect(() => {
    setLatex(generateLatex({ ...formData, education: formData.education }));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Auto-check completion status
    checkSectionCompletion(name as keyof FormData, value);
  };

  const handleEducationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updated = [...formData.education];
    updated[index][e.target.name as keyof typeof updated[0]] = e.target.value;
    setFormData({ ...formData, education: updated });
  };

  const addEducationEntry = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          educationInstitution: "",
          educationDuration: "",
          educationDegree: "",
          educationGrade: "",
          educationLocation: "",
        },
      ],
    });
  };

  const handleDeleteEducationEntry = (index: number) => {
    setFormData({
      ...formData,
      education: formData.education.filter((_, i) => i !== index),
    });
  };

  const checkSectionCompletion = (fieldName: keyof FormData, value: string) => {
    Object.entries(sectionFields).forEach(([section, fields]) => {
      if ((fields as (keyof FormData)[]).includes(fieldName)) {
        const isComplete = (fields as (keyof FormData)[]).some(field => formData[field] || (field === fieldName && value));
        setCompletedSections(prev => ({ ...prev, [section]: isComplete }));
      }
    });
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleDownload = () => {
    const blob = new Blob([latex], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.tex";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-2xl">📄</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">LaTeX Resume Generator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create a professional resume by filling out the sections below. Click on each section to expand and add your information.
          </p>
        </div>

        <div className="space-y-6">
          {/* Personal Information */}
          <SectionCard 
            title="Personal Information" 
            icon={User} 
            sectionKey="personal" 
            color="blue"
            expanded={expandedSections["personal"]}
            completed={completedSections["personal"]}
            onToggle={toggleSection}
          >
            <PersonalInfoSection formData={formData} handleChange={handleChange} />
          </SectionCard>

          {/* Education */}
          <SectionCard 
            title="Education" 
            icon={GraduationCap} 
            sectionKey="education" 
            color="green"
            expanded={expandedSections["education"]}
            completed={completedSections["education"]}
            onToggle={toggleSection}
          >
            <EducationSection
              formData={formData.education}
              handleChange={handleEducationChange}
              addEntry={addEducationEntry}
              deleteEntry={handleDeleteEducationEntry}
            />
          </SectionCard>

          {/* Projects */}
          <SectionCard 
            title="Projects" 
            icon={Code} 
            sectionKey="projects" 
            color="purple"
            expanded={expandedSections["projects"]}
            completed={completedSections["projects"]}
            onToggle={toggleSection}
          >
            <ProjectsSection
              projects={formData.projects}
              setProjects={(projects) => setFormData({ ...formData, projects: Array.isArray(projects) ? projects : [] })}
            />
          </SectionCard>

          {/* Technical Skills */}
          <SectionCard 
            title="Technical Skills" 
            icon={Code} 
            sectionKey="skills" 
            color="orange"
            expanded={expandedSections["skills"]}
            completed={completedSections["skills"]}
            onToggle={toggleSection}
          >
            <SkillsSection formData={formData} handleChange={handleChange} />
          </SectionCard>

          {/* Internships */}
          <SectionCard 
            title="Experience" 
            icon={Briefcase} 
            sectionKey="internships" 
            color="red"
            expanded={expandedSections["internships"]}
            completed={completedSections["internships"]}
            onToggle={toggleSection}
          >
            <InternshipsSection internships={internships} setInternships={setInternships} />
          </SectionCard>

          {/* Achievements */}
          <SectionCard 
            title="Achievements" 
            icon={Trophy} 
            sectionKey="achievements" 
            color="indigo"
            expanded={expandedSections["achievements"]}
            completed={completedSections["achievements"]}
            onToggle={toggleSection}
          >
            <AchievementsSection formData={formData} handleChange={handleChange} />
          </SectionCard>

          {/* Club Involvements */}
          <SectionCard 
            title="Extracurricular Activities" 
            icon={Users} 
            sectionKey="clubs" 
            color="pink"
            expanded={expandedSections["clubs"]}
            completed={completedSections["clubs"]}
            onToggle={toggleSection}
          >
            <ClubsSection formData={formData} handleChange={handleChange} />
          </SectionCard>

          {/* Submit Button */}
          <div className="pt-8">
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:ring-4 focus:ring-blue-300"
            >
              Generate LaTeX Resume Code 🚀
            </button>
            <p className="text-center text-gray-500 mt-3 text-sm">
              Click to generate your professional LaTeX resume code
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-[#0F4539]">LaTeX Preview</h3>
                <div className="flex gap-2">
                  <button
                    onClick={handleDownload}
                    className="bg-[#0E5484] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#0a4066] text-sm flex items-center gap-2"
                  >
                    <span role="img" aria-label="download">📥</span> Download .tex
                  </button>
                  <button
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(latex);
                        setCopyStatus('copied');
                        setTimeout(() => setCopyStatus('idle'), 1500);
                      } catch {
                        setCopyStatus('error');
                        setTimeout(() => setCopyStatus('idle'), 1500);
                      }
                    }}
                    className={`bg-[#0E5484] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#0a4066] text-sm flex items-center gap-2 ${copyStatus === 'copied' ? 'bg-green-600' : ''}`}
                  >
                    <span role="img" aria-label="copy">📋</span> {copyStatus === 'copied' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
              <pre className="bg-gray-800 text-gray-100 p-5 rounded-lg font-mono text-xs leading-relaxed whitespace-pre-wrap h-72 overflow-auto border border-gray-700">
                {latex}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
   