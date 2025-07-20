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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleClose}>
          <div className="bg-white rounded-lg p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-semibold">{selectedMember.name}</h3>
            <p className="text-lg text-gray-600">{selectedMember.title}</p>
            <p className="text-gray-600 mt-2">{selectedMember.description}</p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}