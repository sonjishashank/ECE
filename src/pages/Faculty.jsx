import React from 'react';

function Faculty() {
  const facultyMembers = [
    { name: "Dr. Kishan Singh", designation: "HOD, Professor", image: "/images/faculty1.jpg" },
    { name: "Dr. Mohammed Bakhar", designation: "Professor", image: "/images/faculty2.jpg" },
    { name: "Mr. Ramesh H Patil", designation: "Associate Professor", image: "/images/faculty3.jpg" },
    { name: "Dr. Savita Soma", designation: "Associate Professor", image: "/images/faculty4.jpg" },
    { name: "Dr. Praveen Kumar Reddy", designation: "Associate Professor", image: "/images/faculty5.jpg" },
    { name: "Dr. Pavan Mankal", designation: "Associate Professor", image: "/images/faculty6.jpg" },
    { name: "Dr. Pradeep Karanje", designation: "Associate Professor", image: "/images/faculty7.jpg" },
    { name: "Mr. Rajendra Kulkarni", designation: "Assistant Professor", image: "/images/faculty8.jpg" },
    { name: "Mrs. Namratha", designation: "Assistant Professor", image: "/images/faculty9.jpg" },
    { name: "Mr. Nitin", designation: "Assistant Professor", image: "/images/faculty10.jpg" },
    { name: "Mr. Santosh Yadav", designation: "Assistant Professor", image: "/images/faculty11.jpg" },
    { name: "Mrs. Shilpa Biradar", designation: "Assistant Professor", image: "/images/faculty12.jpg" },
    { name: "Mr. Rakesh Marthurkar", designation: "Assistant Professor", image: "/images/faculty13.jpg" },
    { name: "Mrs. Soni", designation: "Assistant Professor", image: "/images/faculty14.jpg" },
    { name: "Ms Huggi Pooja", designation: "Assistant Professor", image: "/images/faculty15.jpg" },
    { name: "Dr. Shweta Patil", designation: "Assistant Professor", image: "/images/faculty16.jpg" },
    { name: "Mrs. Aarti Pawar", designation: "Assistant Professor", image: "/images/faculty17.jpg" },
    { name: "Manjula", designation: "Assistant Professor", image: "/images/faculty18.jpg" },
    // { name: "Jyoti", designation: "Assistant Professor", image: "/images/faculty19.jpg" },
    // { name: "Mrs. Savita More", designation: "Assistant Professor", image: "/images/faculty20.jpg" },
  ];

  const supportingStaff = [
    { name: "Mayuri Nidebane", designation: "Instructor", image: "/images/staff1.jpg" },
    { name: "Mrs. Poornima K", designation: "Instructor", image: "/images/staff2.jpg" },
    { name: "Sardar Gunwanth Singh", designation: "Assistant Instructor", image: "/images/staff3.jpg" },
    { name: "Nagshetty", designation: "Attender", image: "/images/staff4.jpg" },
    { name: "Basavaraj", designation: "Attender", image: "/images/staff5.jpg" },
    // { name: "Ms. Shalini Sinha", designation: "Lab Assistant", image: "/images/staff6.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Faculty</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">HoD and Faculty Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <img src={faculty.image} alt={faculty.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-center">{faculty.name}</h3>
              <p className="text-center">{faculty.designation}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Supporting Staff</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {supportingStaff.map((staff, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <img src={staff.image} alt={staff.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-center">{staff.name}</h3>
              <p className="text-center">{staff.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faculty;
