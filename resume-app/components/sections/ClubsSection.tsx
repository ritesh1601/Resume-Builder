"use client";
import React, { useState } from "react";

type Props = {
  formData: {
    clubInvolvements: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const ClubsSection: React.FC<Props> = ({ formData, handleChange }) => {
  const [charCount, setCharCount] = useState(formData.clubInvolvements.length);
  const [showPreview, setShowPreview] = useState(true);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    handleChange(e);
  };

  const clubCount = formData.clubInvolvements
    .split('|')
    .filter(club => club.trim().length > 0)
    .length;

  return (
    <div className="mb-8 group">
      {/* Header with improved styling */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl shadow-lg">
            <span className="text-white text-lg font-bold">🤝</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Club Involvements
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showcase your extracurricular activities
            </p>
          </div>
        </div>
        
        {/* Club counter and preview toggle */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>{clubCount} {clubCount === 1 ? 'involvement' : 'involvements'}</span>
            </div>
          </div>
          
          {/* Preview Toggle */}
          {formData.clubInvolvements.trim() && (
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
            >
              {showPreview ? (
                <>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                  Hide Preview
                </>
              ) : (
                <>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Show Preview
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Enhanced textarea container */}
      <div className="relative transition-all duration-300 shadow-sm hover:shadow-md">
        <textarea
          name="clubInvolvements"
          value={formData.clubInvolvements}
          onChange={handleTextareaChange}
          placeholder="Enter your club involvements separated by | (pipe symbol)&#10;Example: Student Council President | Drama Club Member | Debate Team Captain"
          className="w-full min-h-[120px] p-4 border-2 rounded-xl resize-none transition-all duration-300 
            bg-white dark:bg-gray-800 
            text-gray-900 dark:text-white 
            placeholder-gray-400 dark:placeholder-gray-500
            border-gray-200 dark:border-gray-600
            focus:border-purple-500 focus:outline-none
            hover:border-gray-300 dark:hover:border-gray-500
          "
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '15px',
            lineHeight: '1.5'
          }}
        />
        
        {/* Character count and helper text */}
        <div className="flex items-center justify-between mt-2 px-1">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Separate each involvement with | symbol</span>
          </div>
          <span className={`text-xs transition-colors duration-200 ${
            charCount > 500 ? 'text-orange-500' : 'text-gray-400 dark:text-gray-500'
          }`}>
            {charCount} characters
          </span>
        </div>
      </div>

      {/* Preview section */}
      {formData.clubInvolvements.trim() && showPreview && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Preview
          </h3>
          <ul className="space-y-2">
            {formData.clubInvolvements
              .split('|')
              .filter(club => club.trim().length > 0)
              .map((club, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>{club.trim()}</span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClubsSection;