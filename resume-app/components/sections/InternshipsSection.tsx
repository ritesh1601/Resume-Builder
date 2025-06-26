"use client"
import React from "react";

type Props = {
  formData: {
    internshipCompany: string;
    internshipDuration: string;
    internshipRole: string;
    internshipLocation: string;
    internshipResponsibilities: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const InternshipsSection: React.FC<Props> = ({ formData, handleChange }) => (
  <div className="mb-8">
    <h2 className="text-lg font-bold mb-2">💼 Internships</h2>
    <input name="internshipCompany" value={formData.internshipCompany} onChange={handleChange} placeholder="Company Name *" className="input" />
    <input name="internshipDuration" value={formData.internshipDuration} onChange={handleChange} placeholder="Duration *" className="input" />
    <input name="internshipRole" value={formData.internshipRole} onChange={handleChange} placeholder="Role *" className="input" />
    <input name="internshipLocation" value={formData.internshipLocation} onChange={handleChange} placeholder="Location *" className="input" />
    <textarea name="internshipResponsibilities" value={formData.internshipResponsibilities} onChange={handleChange} placeholder="Responsibilities (use |)" className="textarea" />
  </div>
);

export default InternshipsSection; 