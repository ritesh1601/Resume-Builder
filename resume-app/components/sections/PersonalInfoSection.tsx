"use client"
import React from "react";

type Props = {
  formData: {
    fullName: string;
    location: string;
    website: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    codeforces: string;
    leetcode: string;
    geeksforgeeks: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PersonalInfoSection: React.FC<Props> = ({ formData, handleChange }) => (
  <div className="mb-8 border-l-4 border-[#0E5484] pl-5">
    <h2 className="text-xl text-[#0F4539] mb-4 flex items-center gap-2 font-semibold">
      <span className="w-5 h-5 bg-[#0E5484] rounded-full flex items-center justify-center text-white text-xs">👤</span>
      Personal Information
    </h2>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="fullName" className="block mb-1 font-semibold text-gray-700 text-sm">Full Name *</label>
        <input type="text" id="fullName" name="fullName" required placeholder="John Doe" value={formData.fullName} onChange={handleChange} className="w-full p-2 border-2 border-gray-200 rounded-md text-sm bg-gray-50 focus:border-[#0E5484] focus:bg-white focus:outline-none" />
      </div>
      <div>
        <label htmlFor="location" className="block mb-1 font-semibold text-gray-700 text-sm">Location *</label>
        <input type="text" id="location" name="location" required placeholder="City, State" value={formData.location} onChange={handleChange} className="w-full p-2 border-2 border-gray-200 rounded-md text-sm bg-gray-50 focus:border-[#0E5484] focus:bg-white focus:outline-none" />
      </div>
    </div>
    <div className="mb-4">
      <label htmlFor="website" className="block mb-1 font-semibold text-gray-700 text-sm">Personal Website</label>
      <input type="url" id="website" name="website" placeholder="https://yourwebsite.com" value={formData.website} onChange={handleChange} className="w-full p-2 border-2 border-gray-200 rounded-md text-sm bg-gray-50 focus:border-[#0E5484] focus:bg-white focus:outline-none" />
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="phone" className="block mb-1 font-semibold text-gray-700 text-sm">Phone Number *</label>
        <input type="tel" id="phone" name="phone" required placeholder="+91-1234567890" value={formData.phone} onChange={handleChange} className="w-full p-2 border-2 border-gray-200 rounded-md text-sm bg-gray-50 focus:border-[#0E5484] focus:bg-white focus:outline-none" />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-semibold text-gray-700 text-sm">Email *</label>
        <input type="email" id="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} className="w-full p-2 border-2 border-gray-200 rounded-md text-sm bg-gray-50 focus:border-[#0E5484] focus:bg-white focus:outline-none" />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="linkedin" className="block mb-1 font-semibold text-gray-700 text-sm">LinkedIn Profile</label>
        <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/yourprofile" value={formData.linkedin} onChange={handleChange} className="w-full p-2 border-2 border-gray-200 rounded-md text-sm bg-gray-50 focus:border-[#0E5484] focus:bg-white focus:outline-none" />
      </div>
      <div>
        <label htmlFor="github" className="block mb-1 font-semibold text-gray-700 text-sm">GitHub Profile</label>
        <input type="url" id="github" name="github" placeholder="https://github.com/yourusername" value={formData.github} onChange={handleChange} className="w-full p-2 border-2 border-gray-200 rounded-md text-sm bg-gray-50 focus:border-[#0E5484] focus:bg-white focus:outline-none" />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="codeforces" className="block mb-1 font-semibold text-gray-700 text-sm">Codeforces Profile</label>
        <input type="url" id="codeforces" name="codeforces" placeholder="https://codeforces.com/profile/username" value={formData.codeforces} onChange={handleChange} className="w-full p-2 border-2 border-gray-200 rounded-md text-sm bg-gray-50 focus:border-[#0E5484] focus:bg-white focus:outline-none" />
      </div>
      <div>
        <label htmlFor="leetcode" className="block mb-1 font-semibold text-gray-700 text-sm">LeetCode Profile</label>
        <input type="url" id="leetcode" name="leetcode" placeholder="https://leetcode.com/u/username" value={formData.leetcode} onChange={handleChange} className="w-full p-2 border-2 border-gray-200 rounded-md text-sm bg-gray-50 focus:border-[#0E5484] focus:bg-white focus:outline-none" />
      </div>
    </div>
    <div className="mb-4">
      <label htmlFor="geeksforgeeks" className="block mb-1 font-semibold text-gray-700 text-sm">GeeksforGeeks Profile</label>
      <input type="url" id="geeksforgeeks" name="geeksforgeeks" placeholder="https://www.geeksforgeeks.org/user/username/" value={formData.geeksforgeeks} onChange={handleChange} className="w-full p-2 border-2 border-gray-200 rounded-md text-sm bg-gray-50 focus:border-[#0E5484] focus:bg-white focus:outline-none" />
    </div>
  </div>
);

export default PersonalInfoSection; 