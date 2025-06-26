"use client";

type Internship = {
  id: string;
  company: string;
  duration: string;
  role: string;
  location: string;
  responsibilities: string;
};

type Props = {
  internships: Internship[];
  setInternships: React.Dispatch<React.SetStateAction<Internship[]>>;
};

const InternshipsSection: React.FC<Props> = ({ internships, setInternships }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => {
    const { name, value } = e.target;
    setInternships(
      internships.map((internship) =>
        internship.id === id ? { ...internship, [name]: value } : internship
      )
    );
  };

  const addInternship = () => {
    setInternships([
      ...internships,
      {
        id: Date.now().toString(),
        company: "",
        duration: "",
        role: "",
        location: "",
        responsibilities: "",
      },
    ]);
  };

  const removeInternship = (id: string) => {
    setInternships(internships.filter((internship) => internship.id !== id));
  };

  return (
    <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <span className="mr-2">💼</span> Work
        </h2>
        <button
          type="button"
          onClick={addInternship}
          className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Work
        </button>
      </div>

      {internships.map((internship, index) => (
        <div key={internship.id} className="mb-6 p-5 border border-gray-200 rounded-lg bg-gray-50 relative group">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-gray-700">
              Work #{index + 1}
            </h3>
            {internships.length > 1 && (
              <button
                type="button"
                onClick={() => removeInternship(internship.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name *
              </label>
              <input
                name="company"
                value={internship.company}
                onChange={(e) => handleChange(e, internship.id)}
                placeholder="e.g., Google, Microsoft"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration *
              </label>
              <input
                name="duration"
                value={internship.duration}
                onChange={(e) => handleChange(e, internship.id)}
                placeholder="e.g., Summer 2023, 3 months"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role *
              </label>
              <input
                name="role"
                value={internship.role}
                onChange={(e) => handleChange(e, internship.id)}
                placeholder="e.g., Software Engineering Intern"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <input
                name="location"
                value={internship.location}
                onChange={(e) => handleChange(e, internship.id)}
                placeholder="e.g., Remote, San Francisco, CA"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Responsibilities (use | to separate points)
            </label>
            <textarea
              name="responsibilities"
              value={internship.responsibilities}
              onChange={(e) => handleChange(e, internship.id)}
              placeholder="e.g., Developed new features using React|Collaborated with cross-functional teams|Optimized application performance"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="mt-1 text-xs text-gray-500">
              {internship.responsibilities.split('|').filter(Boolean).length} responsibilities added
            </div>
          </div>
        </div>
      ))}

      <div className="text-sm text-gray-500 mt-4">
        <p>💡 Tip: Focus on quantifiable achievements and specific technologies used during your internships.</p>
      </div>
    </div>
  );
};

export default InternshipsSection;