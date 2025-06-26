"use client"
import React from "react";

type Props = {
  formData: {
    clubInvolvements: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const ClubsSection: React.FC<Props> = ({ formData, handleChange }) => (
  <div className="mb-8">
    <h2 className="text-lg font-bold mb-2">🤝 Club Involvements</h2>
    <textarea name="clubInvolvements" value={formData.clubInvolvements} onChange={handleChange} placeholder="Club Activities (use |)" className="textarea" />
  </div>
);

export default ClubsSection; 