"use client"
import React from "react";

type Props = {
  formData: {
    achievements: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const AchievementsSection: React.FC<Props> = ({ formData, handleChange }) => (
  <div className="mb-8">
    <h2 className="text-lg font-bold mb-2">🏆 Achievements</h2>
    <textarea name="achievements" value={formData.achievements} onChange={handleChange} placeholder="Achievements (use |)" className="textarea" />
  </div>
);

export default AchievementsSection; 