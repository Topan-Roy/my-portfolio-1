import React from 'react';

const Myprojcet = () => {
    const projects = [
        {
            id: 1,
            name: "Tourism Management System ",
            Duration: "Duration : 20 Day",
            image: "https://i.ibb.co.com/XxjDxMYJ/tur.png",
            description: "A MERN stack tourism app with booking, payment & role-based dashboard.",
            live: "https://tourism-management-syste-e2926.web.app/",
            github: "https://github.com/Topan-Roy/tourism-management-client-git"
        },
        {
            id: 2,
            name: "Online Group Study",
            Duration: "Duration : 15 Day",
            image: "https://i.ibb.co.com/HfHnktZW/stu.png",
            description: "Group study platform with assignments, reviews, and real-time updates.",
            live: "https://online-group-study-f26a8.web.app/",
            github: "https://github.com/Topan-Roy/online-group-study-client11"
        },
        {
            id: 3,
            name: "Plant Care Tracker",
            Duration: "Duration : 10 Day",
            image: "https://i.ibb.co.com/DPnqjPGK/tree.png",
            description: "Track your plants, care schedule, and health status.",
            live: "https://plant-care-tracker-3a085.web.app/",
            github: "https://github.com/Topan-Roy/plant-care-tracker-client-git"
        },
         {
            id: 4,
            name: "Bhajon - Online Food Ordering",
            Duration: "Duration : 7 Day",
            image: "https://i.ibb.co.com/spG1398s/bhojon.png",
            description: "A modern food ordering platform with authentication, responsive UI, and real-time order updates.",
            live: "https://bhajon-3d8a3.web.app/",
            github: "https://github.com/Topan-Roy/Bhojon-client"
        },
         {
            id: 5,
            name: "Ride Sharing Platform (Team Project)",
            Duration: "Duration : 36 Day",
            image: "https://i.ibb.co.com/RkZZ1phL/cholo.png",
            description: "A real-time ride sharing web app where users can book or offer rides. Includes authentication, live ride requests, and role-based dashboards.",
            live: "https://cholo.netlify.app/",
            github: "https://github.com/Utso-Roy/cholo_ride_sharing_-team-"
        }
    ];
    return (
        <section className="py-10 px-5 mt-5 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
                        >
                            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                
                                <h3 className="text-sm  mb-2">{project.Duration}</h3>
                                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                                    >
                                        Live
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
                                    >
                                        GitHub
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Myprojcet;