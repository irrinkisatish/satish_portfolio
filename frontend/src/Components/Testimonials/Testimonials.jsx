import React from "react";
import { ACHIEVEMENTS } from "../../assets/assets";

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="heading">🏆 My Achievements</h1>
      <hr className="hr-line" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">
        {ACHIEVEMENTS.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-white shadow-lg rounded-2xl p-4"
          >
            {achievement.mediaType === "image" ? (
              <img
                src={achievement.mediaSrc}
                alt={achievement.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            ) : (
              <video controls className="w-full h-48 rounded-lg">
                <source src={achievement.mediaSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <h3 className="text-xl font-semibold mt-4">{achievement.title}</h3>
            <p className="text-gray-600 mt-2">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
