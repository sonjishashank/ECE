import React from 'react';

function Clubs() {
  const clubs = [
    {
      name: 'Robotics Club',
      description: 'A platform for students to explore robotics and automation.',
      image: '/images/robotics-club.jpg',
      activities: [
        'Weekly workshops',
        'Robot building competitions',
        'Industry visits'
      ]
    },
    {
      name: 'IoT Club',
      description: 'Focusing on Internet of Things projects and applications.',
      image: '/images/iot-club.jpg',
      activities: [
        'Project development',
        'Hackathons',
        'Technical talks'
      ]
    },
    {
      name: 'Innovation Club',
      description: 'Encouraging innovative thinking and problem-solving.',
      image: '/images/innovation-club.jpg',
      activities: [
        'Ideation sessions',
        'Project mentoring',
        'Startup guidance'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Student Clubs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={club.image} alt={club.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{club.name}</h2>
              <p className="text-gray-600 mb-4">{club.description}</p>
              <h3 className="font-semibold mb-2">Activities:</h3>
              <ul className="list-disc pl-5">
                {club.activities.map((activity, actIndex) => (
                  <li key={actIndex}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clubs;