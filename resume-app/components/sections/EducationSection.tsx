"use client";

import React from "react";
import { Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

type EducationEntry = {
  educationInstitution: string;
  educationDuration: string;
  educationDegree: string;
  educationGrade: string;
  educationLocation: string;
};

type Props = {
  formData: EducationEntry[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  addEntry: () => void;
  deleteEntry: (index: number) => void;
};

const EducationSection: React.FC<Props> = ({ formData, handleChange, addEntry, deleteEntry }) => {
  return (
    <div className="space-y-6">
      {formData.map((entry, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-xl shadow-sm bg-white dark:bg-zinc-900 relative"
        >
          <Button
            type="button"
            variant="destructive"
            size="icon"
            onClick={() => deleteEntry(index)}
            className="absolute top-2 right-2"
            aria-label="Delete education entry"
          >
            <Trash className="w-4 h-4" />
          </Button>
          <input
            name="educationInstitution"
            value={entry.educationInstitution}
            onChange={(e) => handleChange(e, index)}
            placeholder="Institution Name *"
            className="input border px-3 py-2 rounded-md w-full dark:bg-zinc-800 dark:text-white"
          />
          <input
            name="educationDuration"
            value={entry.educationDuration}
            onChange={(e) => handleChange(e, index)}
            placeholder="Duration *"
            className="input border px-3 py-2 rounded-md w-full dark:bg-zinc-800 dark:text-white"
          />
          <input
            name="educationDegree"
            value={entry.educationDegree}
            onChange={(e) => handleChange(e, index)}
            placeholder="Degree & Major *"
            className="input border px-3 py-2 rounded-md w-full dark:bg-zinc-800 dark:text-white"
          />
          <input
            name="educationGrade"
            value={entry.educationGrade}
            onChange={(e) => handleChange(e, index)}
            placeholder="Grade (optional)"
            className="input border px-3 py-2 rounded-md w-full dark:bg-zinc-800 dark:text-white"
          />
          <input
            name="educationLocation"
            value={entry.educationLocation}
            onChange={(e) => handleChange(e, index)}
            placeholder="Location *"
            className="input border px-3 py-2 rounded-md w-full dark:bg-zinc-800 dark:text-white"
          />
        </div>
      ))}

      <button
        onClick={addEntry}
        className="flex items-center gap-2 text-green-600 hover:text-green-800 dark:hover:text-green-400 transition"
      >
        <Plus className="w-5 h-5" /> Add More Education
      </button>
    </div>
  );
};

export default EducationSection;
