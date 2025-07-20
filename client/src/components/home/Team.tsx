import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import valeriePhoto from "./images/valerietsang.jpg";
import jessicaPhoto from "./images/jesslima.jpg";
import cynthiaPhoto from "./images/websitephoto_cynthia.jpg";
import liamPhoto from "./images/websitephoto_liam.jpg";
import gabrielPhoto from "./images/websitephoto_gabriel.jpg";
import karlaPhoto from "./images/websitephoto_karla.jpg";
import joshuaPhoto from "./images/vujoshia.jpg";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Valerie Tsang",
    title: "Founder and Executive Director",
    description: "With SparkArts, I hope to create a space where children can bring their artistic thoughts to life and explore their creativity freely!",
    image: valeriePhoto
  },
  {
    name: "Jessica Lema",
    title: "Outreach Manager",
    description: "With SparkArts, I strive to create a secure environment for children where they feel safe and loved, and always have someone to look to.",
    image: jessicaPhoto
  },
  {
    name: "Cynthia Yu",
    title: "Creative Director",
    description: "Hi, I’m Cynthia and I joined SparkArts to spread my love and passion for art with others.",
    image: cynthiaPhoto
  },
  {
    name: "Liam Chau",
    title: "Treasurer",
    description: "I joined SparkArts because I feel happiness when helping and encouraging others.",
    image: liamPhoto
  },
  {
    name: "Karla Cruz Velasquez",
    title: "Communications Manager",
    description: "I’ve always been passionate about creating a space where young minds can express themselves freely through art.",
    image: karlaPhoto
  },
  {
    name: "Joshua Vu",
    title: "Volunteer Engagement Manager",
    description: "With SparkArts, I want to help students find their creativity and passion through art.",
    image: joshuaPhoto
  },
  {
    name: "Gabriel Yee",
    title: "Program Director",
    description: "With SparkArts, I hope to be able to give children the creative opportunities I didn't have.",
    image: gabrielPhoto
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleClose = () => {
    setSelectedMember(null);
  }

  return (
    <section className="py-24" style={{ backgroundColor: "#faf2e9" }} onClick={handleClose}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-16 text-black-300">MEET THE TEAM</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="relative rounded-lg overflow-hidden shadow-lg h-[400px] border-2 border-pink-300" onClick={(e) => {
              e.stopPropagation(); // Prevent click event from bubbling up
              handleClick(member);
            }}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-85 p-4 text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-pink-400">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50" onClick={handleClose}>
          <div className="relative bg-white rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl border-4 border-gray-800" onClick={(e) => e.stopPropagation()}>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-gray-800"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-[16px] border-r-[16px] border-t-[16px] border-l-transparent border-r-transparent border-t-white"></div>
            </div>
            
            {/* Content */}
            <div className="text-center">
              <div className="mb-4">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-pink-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{selectedMember.name}</h3>
              <p className="text-lg text-pink-600 font-semibold mb-4">{selectedMember.title}</p>
              <p className="text-gray-700 leading-relaxed text-sm italic">"{selectedMember.description}"</p>
            </div>
            
            {/* Close button */}
            <button 
              className="absolute top-3 right-3 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
              onClick={handleClose}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}