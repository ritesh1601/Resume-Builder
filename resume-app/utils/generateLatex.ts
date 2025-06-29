export type EducationEntry = {
  educationInstitution: string;
  educationDuration: string;
  educationDegree: string;
  educationGrade: string;
  educationLocation: string;
};

export type Project = {
  id: string;
  projectName: string;
  projectDate: string;
  projectLiveUrl: string;
  projectGithubUrl: string;
  projectDescription: string;
  projectTechStack: string;
};

export type Internship = {
  id: string;
  company: string;
  duration: string;
  role: string;
  location: string;
  responsibilities: string;
};

export type FormData = {
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
  education: EducationEntry[];
  projects: Project[];
  internships: Internship[];
  languages: string;
  technologies: string;
  coreSubjects: string;
  achievements: string;
  clubInvolvements: string;
};

function formatList(str: string) {
  return str
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => `  \\resumeItem{${s}}`)
    .join("\n");
}

const generateLatex = (data: FormData): string => {
  const educationLatex = data.education
    .map(
      (entry) =>
        `  \\resumeSubheading
      {${entry.educationInstitution}}{${entry.educationDuration}}
      {${entry.educationDegree}${entry.educationGrade ? ` - \\textbf{${entry.educationGrade}}` : ''}}{${entry.educationLocation}}`
    )
    .join("\n  \\resumeSubHeadingListEnd\n   \\resumeSubHeadingListStart\n");

  const projectsLatex = data.projects
    .map(
      (project) =>
        `  \\resumeProjectHeading
          {${project.projectLiveUrl ? `\\href{${project.projectLiveUrl}}{\\textbf{\\large{\\underline{${project.projectName}}}}} \\href{${project.projectLiveUrl}}{\\raisebox{-0.1\\height}\\faExternalLink}` : project.projectName} ${project.projectGithubUrl ? `\\quad \\href{${project.projectGithubUrl}}{\\raisebox{-0.1\\height}\\faGithub}` : ''}}{${project.projectDate}}\\
          \\resumeItemListStart
${formatList(project.projectDescription)}
          \\resumeItemListEnd 
            {\\large \\textbf{Tech Stack:}} ${project.projectTechStack}\n          \\vspace{-13pt}`
    )
    .join("\n");

  const internshipsLatex = data.internships
    .map(
      (internship) =>
        `  \\resumeSubheading
      {${internship.company}}{${internship.duration}}
      {\\underline{Role - ${internship.role}}}{${internship.location}}
      \\resumeItemListStart
${formatList(internship.responsibilities)}
      \\resumeItemListEnd  `
    )
    .join("\n\\vspace{-12pt}\n");

  return `%-------------------------
% Resume in Latex
% Author : ${data.fullName || 'Your Name'}
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\usepackage{fontawesome5}
\\usepackage{multicol}
\\usepackage{graphicx}
\\setlength{\\multicolsep}{-3.0pt}
\\setlength{\\columnsep}{-1pt}
\\input{glyphtounicode}

\\RequirePackage{tikz}
\\RequirePackage{xcolor}
\\RequirePackage{fontawesome}
\\usepackage{tikz}
\\usetikzlibrary{svg.path}

\\definecolor{cvblue}{HTML}{0E5484}
\\definecolor{black}{HTML}{130810}
\\definecolor{darkcolor}{HTML}{0F4539}
\\definecolor{cvgreen}{HTML}{3BD80D}
\\definecolor{taggreen}{HTML}{00E278}
\\definecolor{SlateGrey}{HTML}{2E2E2E}
\\definecolor{LightGrey}{HTML}{666666}
\\colorlet{name}{black}
\\colorlet{tagline}{darkcolor}
\\colorlet{heading}{darkcolor}
\\colorlet{headingrule}{cvblue}
\\colorlet{accent}{darkcolor}
\\colorlet{emphasis}{SlateGrey}
\\colorlet{body}{LightGrey}

%----------FONT OPTIONS----------
% sans-serif
% \\usepackage[sfdefault]{FiraSans}
% \\usepackage[sfdefault]{roboto}
% \\usepackage[sfdefault]{noto-sans}
% \\usepackage[default]{sourcesanspro}

% serif
% \\usepackage{CormorantGaramond}
% \\usepackage{charter}

% \\pagestyle{fancy}
% \\fancyhf{}  % clear all header and footer fields
% \\fancyfoot{}
% \\renewcommand{\\headrulewidth}{0pt}
% \\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.6in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1.19in}
\\addtolength{\\topmargin}{-.7in}
\\addtolength{\\textheight}{1.4in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large\\bfseries
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\classesList}[4]{
    \\item\\small{
        {#1 #2 #3 #4 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{1.0\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{\\large#1} & \\textbf{\\small #2} \\
      \\textit{\\large#3} & \\textit{\\small #4} \\
      
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\
    \\end{tabular*}\\vspace{-7pt}
}


\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{1.001\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & \\textbf{\\small #2}\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemi{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}
\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.0in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}


\\newcommand\sbullet[1][.5]{\\mathbin{\\vcenter{\\hbox{\\scalebox{#1}{$\\bullet$}}}}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\\begin{document}

%----------HEADING----------


\\begin{center}
    {\\Huge \\scshape ${data.fullName}} \\ \\vspace{1pt}
    ${data.location}\\ 
    ${data.website ? `\\href{${data.website}}{\\textbf{\\textbf{Personal Website}}
}` : ''} \\ \\vspace{1pt}\\vspace{1pt}
    \\small \\href{tel:${data.phone}}{ \\raisebox{-0.1\\height}\\faPhone\\ \\underline{${data.phone}} ~} \\href{mailto:${data.email}}{\\raisebox{-0.2\\height}\\faEnvelope\\  \\underline{${data.email}}} ~ 
    ${data.linkedin ? `\\href{${data.linkedin}}{\\raisebox{-0.2\\height}\\faLinkedinSquare\\ \\underline{Linkedin}}  ~` : ''}
    ${data.github ? `\\href{${data.github}}{\\raisebox{-0.2\\height}\\faGithub\\ \\underline{Github}} ~` : ''}
    ${data.codeforces ? `\\href{${data.codeforces}}{\\raisebox{-0.2\\height}{\\includegraphics[height=0.3cm, width=0.3cm]{codeforces.jpg}}\\ \\underline{Codeforces}} ~` : ''}
    \\vspace{-8pt}
    ${data.leetcode ? `\\href{${data.leetcode}}{\\raisebox{-0.2\\height}{\\includegraphics[height=0.3cm, width=0.3cm]{leetcode.png}}\\ \\underline{LeetCode}} ~` : ''}
    \\vspace{-8pt}
    \\end{center}
    \\vspace{10pt}
    \\hspace{230pt}
    ${data.geeksforgeeks ? `\\href{${data.geeksforgeeks}}{\\raisebox{-0.2\\height}{\\includegraphics[height=0.3cm, width=0.3cm]{gfg.png}}\\ \\underline{GeeksforGeeks}} ~` : ''}
\\end{center}
 \\vspace{0.5mm}


%-----------EDUCATION-----------
\\section{EDUCATION}
  \\resumeSubHeadingListStart
${educationLatex}
  \\resumeSubHeadingListEnd
  
%-----------PROJECTS-----------
\\section{PROJECTS}
    \\vspace{-5pt}
    \\resumeSubHeadingListStart
${projectsLatex}
    \\resumeSubHeadingListEnd
    
%-----------INTERNSHIP-----------
\\section{INTERNSHIP}
  \\resumeSubHeadingListStart
${internshipsLatex}
  \\resumeSubHeadingListEnd
\\vspace{-12pt}
  %-----------CERTIFICATIONS---------------
  \\vspace{3pt}
%-----------ACHIEVEMENTS-----------
\\section{ACHIEVEMENTS}

\\begin{itemize} \\setlength{\\itemsep}{0pt}
${formatList(data.achievements)}
\\end{itemize}

%-----------TECHNICAL SKILLS-----------

\\section*{TECHNICAL SKILLS}  

\\textbf{Languages:} ${data.languages}  

\\textbf{Technologies/Frameworks:} ${data.technologies}  

\\textbf{Core Subjects:} ${data.coreSubjects}
 \\vspace{-10pt}

%-----------CLUB INVOLVEMENTS-----------
\\section*{CLUB INVOLVEMENTS}  
\\begin{itemize} \\setlength{\\itemsep}{0pt}
${formatList(data.clubInvolvements)}
\\end{itemize}
 \\vspace{-11pt}
 
 \\end{document}

\\end{document}`;
};

export default generateLatex; 