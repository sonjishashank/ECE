import React from 'react';

function StudyCorner() {
  const resources = [
    {
      semester: '3rd Semester',
      subjects: [
        {
          name: 'Digital Electronics',
          notes: 'https://drive.google.com/placeholder-link-1',
          materials: 'https://drive.google.com/placeholder-link-2'
        },
        {
          name: 'Signals and Systems',
          notes: 'https://drive.google.com/placeholder-link-3',
          materials: 'https://drive.google.com/placeholder-link-4'
        },
      ]
    },
    {
      semester: '4th Semester',
      subjects: [
        {
          name: 'Microprocessors',
          notes: 'https://drive.google.com/placeholder-link-5',
          materials: 'https://drive.google.com/placeholder-link-6'
        },
        {
          name: 'Communication Systems',
          notes: 'https://drive.google.com/placeholder-link-7',
          materials: 'https://drive.google.com/placeholder-link-8'
        },
      ]
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Study Corner</h1>
      <div className="space-y-8">
        {resources.map((semester, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{semester.semester}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {semester.subjects.map((subject, subIndex) => (
                <div key={subIndex} className="border p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                  <div className="space-y-2">
                    <a
                      href={subject.notes}
                      className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lecture Notes
                    </a>
                    <a
                      href={subject.materials}
                      className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Study Materials
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyCorner;