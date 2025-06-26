// Constants used in Form.tsx

export const colorClasses = {
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
  purple: "from-purple-500 to-purple-600",
  orange: "from-orange-500 to-orange-600",
  red: "from-red-500 to-red-600",
  indigo: "from-indigo-500 to-indigo-600",
  pink: "from-pink-500 to-pink-600",
};

export const sectionFields = {
  personal: ['fullName', 'email', 'phone', 'location'],
  education: ['educationInstitution', 'educationDuration', 'educationDegree', 'educationLocation'],
  projects: ['projectName', 'projectTechStack'],
  skills: ['languages', 'technologies'],
  internships: ['internshipCompany', 'internshipRole'],
  achievements: ['achievements'],
  clubs: ['clubInvolvements'],
}; 

export interface SectionCardProps {
  title: string;
  icon: React.ElementType;
  sectionKey: string;
  children: React.ReactNode;
  color?: string;
  expanded: boolean;
  completed: boolean;
  onToggle: (sectionKey: string) => void;
}

export const dummyFormData = {
  fullName: "John Doe",
  location: "New York, NY",
  website: "https://johndoe.com",
  phone: "+1 555-123-4567",
  email: "john.doe@email.com",
  linkedin: "linkedin.com/in/johndoe",
  github: "github.com/johndoe",
  codeforces: "codeforces.com/profile/johndoe",
  leetcode: "leetcode.com/johndoe",
  geeksforgeeks: "geeksforgeeks.org/user/johndoe",
  educationInstitution: "Massachusetts Institute of Technology",
  educationDuration: "2018 - 2022",
  educationDegree: "B.Sc. in Computer Science",
  educationGrade: "3.9/4.0 GPA",
  educationLocation: "Cambridge, MA",
  projectName: "Smart Resume Builder",
  projectDate: "Jan 2022 - May 2022",
  projectLiveUrl: "https://resume-builder.com",
  projectGithubUrl: "github.com/johndoe/resume-builder",
  projectDescription: "A web app to generate professional resumes in LaTeX.",
  projectTechStack: "React, TypeScript, Node.js",
  languages: "English, Spanish",
  technologies: "React, Node.js, Python, SQL",
  coreSubjects: "Algorithms, Data Structures, Databases",
  internshipCompany: "Google",
  internshipDuration: "Summer 2021",
  internshipRole: "Software Engineering Intern",
  internshipLocation: "Mountain View, CA",
  internshipResponsibilities: "Worked on improving search algorithms for Google Search.",
  achievements: "Winner, ACM ICPC Regional 2021; Dean's List 2020-2022",
  clubInvolvements: "President, Coding Club; Member, Robotics Club",
};