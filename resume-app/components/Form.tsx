"use client"
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, User, GraduationCap, Briefcase, Code, Trophy, Users } from "lucide-react";
import PersonalInfoSection from "./sections/PersonalInfoSection";
import EducationSection from "./sections/EducationSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import InternshipsSection from "./sections/InternshipsSection";
import AchievementsSection from "./sections/AchievementsSection";
import ClubsSection from "./sections/ClubsSection";
import generateLatex, { FormData } from "../utils/generateLatex";
import { colorClasses, sectionFields } from "../lib/constants";

const initialFormData: FormData = {
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
  educationInstitution: "",
  educationDuration: "",
  educationDegree: "",
  educationGrade: "",
  educationLocation: "",
  projectName: "",
  projectDate: "",
  projectLiveUrl: "",
  projectGithubUrl: "",
  projectDescription: "",
  projectTechStack: "",
  languages: "",
  technologies: "",
  coreSubjects: "",
  internshipCompany: "",
  internshipDuration: "",
  internshipRole: "",
  internshipLocation: "",
  internshipResponsibilities: "",
  achievements: "",
  clubInvolvements: "",
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

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

  const [latex, setLatex] = useState<string>(generateLatex(formData));

  // Update LaTeX in real time
  useEffect(() => {
    setLatex(generateLatex(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Auto-check completion status
    checkSectionCompletion(name as keyof FormData, value);
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

  const SectionCard = ({ 
    title, 
    icon: Icon, 
    sectionKey, 
    children,
    color = "blue"
  }: {
    title: string;
    icon: React.ElementType;
    sectionKey: string;
    children: React.ReactNode;
    color?: string;
  }) => {
    // Use imported colorClasses
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div 
          className={`bg-gradient-to-r ${(colorClasses as Record<string, string>)[color]} p-4 cursor-pointer transition-all duration-200 hover:shadow-md`}
          onClick={() => toggleSection(sectionKey)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">{title}</h2>
              {completedSections[sectionKey] && (
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              )}
            </div>
            {expandedSections[sectionKey] ? 
              <ChevronUp className="w-5 h-5 text-white" /> : 
              <ChevronDown className="w-5 h-5 text-white" />
            }
          </div>
        </div>
        
        {expandedSections[sectionKey] && (
          <div className="p-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
            {children}
          </div>
        )}
      </div>
    );
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
          <SectionCard title="Personal Information" icon={User} sectionKey="personal" color="blue">
            <PersonalInfoSection formData={formData} handleChange={handleChange} />
          </SectionCard>

          {/* Education */}
          <SectionCard title="Education" icon={GraduationCap} sectionKey="education" color="green">
            <EducationSection formData={formData} handleChange={handleChange} />
          </SectionCard>

          {/* Projects */}
          <SectionCard title="Projects" icon={Code} sectionKey="projects" color="purple">
            <ProjectsSection formData={formData} handleChange={handleChange} />
          </SectionCard>

          {/* Technical Skills */}
          <SectionCard title="Technical Skills" icon={Code} sectionKey="skills" color="orange">
            <SkillsSection formData={formData} handleChange={handleChange} />
          </SectionCard>

          {/* Internships */}
          <SectionCard title="Internships & Experience" icon={Briefcase} sectionKey="internships" color="red">
            <InternshipsSection formData={formData} handleChange={handleChange} />
          </SectionCard>

          {/* Achievements */}
          <SectionCard title="Achievements" icon={Trophy} sectionKey="achievements" color="indigo">
            <AchievementsSection formData={formData} handleChange={handleChange} />
          </SectionCard>

          {/* Club Involvements */}
          <SectionCard title="Extracurricular Activities" icon={Users} sectionKey="clubs" color="pink">
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
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-[#0F4539]">LaTeX Preview</h3>
              <button
                onClick={handleDownload}
                className="bg-[#0E5484] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#0a4066] text-sm flex items-center gap-2"
              >
                <span role="img" aria-label="download">📥</span> Download .tex
              </button>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-5 rounded-lg font-mono text-xs leading-relaxed whitespace-pre-wrap h-72 overflow-auto border border-gray-700">
              {latex}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;