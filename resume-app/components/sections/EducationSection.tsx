"use client"
import React from "react";

type Props = {
  formData: {
    educationInstitution: string;
    educationDuration: string;
    educationDegree: string;
    educationGrade: string;
    educationLocation: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const EducationSection: React.FC<Props> = ({ formData, handleChange }) => (
  <div className="mb-8">
    <h2 className="text-lg font-bold mb-2">🎓 Education</h2>
    <input name="educationInstitution" value={formData.educationInstitution} onChange={handleChange} placeholder="Institution Name *" className="input" />
    <input name="educationDuration" value={formData.educationDuration} onChange={handleChange} placeholder="Duration *" className="input" />
    <input name="educationDegree" value={formData.educationDegree} onChange={handleChange} placeholder="Degree & Major *" className="input" />
    <input name="educationGrade" value={formData.educationGrade} onChange={handleChange} placeholder="Grade (optional)" className="input" />
    <input name="educationLocation" value={formData.educationLocation} onChange={handleChange} placeholder="Location *" className="input" />
  </div>
);

export default EducationSection; 