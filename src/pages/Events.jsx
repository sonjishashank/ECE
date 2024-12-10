import React from 'react';

function Events() {
  const events = [
    {
      title: 'Technical Symposium 2023',
      date: 'December 15, 2023',
      image: '/images/event1.jpg',
      description: 'Annual technical symposium featuring project exhibitions and competitions.'
    },
    {
      title: 'Workshop on IoT',
      date: 'November 25, 2023',
      image: '/images/event2.jpg',
      description: 'Hands-on workshop on Internet of Things and its applications.'
    },
    // Add more events
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Events Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;