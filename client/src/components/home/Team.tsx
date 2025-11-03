import React, { useState, useEffect } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import valeriePhoto from "./images/valerietsang.jpg";
import jessicaPhoto from "./images/jesslima.jpg";
import cynthiaPhoto from "./images/cynthia_photo.jpeg";
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
    description:
      "Hi! My name is Valerie Tsang and I am the founder of SparkArts! I am currently a sophmore at Poolesville High School! I started SparkArts because I believe that every student should have the equal opportunity to have fun and create art without any barriers. I hope all children can learn and grow as artists and students. I love creating arts and crafts and cannot wait to share the joy with students!",
    image: valeriePhoto,
  },
  {
    name: "Jessica Lema",
    title: "Outreach Director",
    description:
      "Hi, my name is Jessica and I'm a sophmore at Quince Orchard HS and the Outreach Director at SparkArts! Seeing the joy of children and people who don't have much especially in times like these, brings nothing but joy to my heart. I'm incredibly blessed to be apart of this initiative and I hope to get as many people involved as possible.",
    image: jessicaPhoto,
  },
  {
    name: "Cynthia Yu",
    title: "Creative Director",
    description:
      "Hi, I’m Cynthia Yu and I'm the Creative Director of SparkArts! I'm currently a sophomore at Poolesville High School. I hope I can inspire many others to discover their passion for art. Art has been my way of expressing myself since I was in elementary school and I woul dlove to give back that love for art through SparkArts.",
    image: cynthiaPhoto,
  },
  {
    name: "Liam Chau",
    title: "Treasurer",
    description:
      "Hi, I'm Liam Chau! I'm a 10th grader at Northwest HS and the Treasurer at SparkArts. I joined SparkArts because when I was in elementary school, whenever I helped other kids out with their work they would be happy that I helped them, and it really sparked my passion for helping other kids. With SparkArts, I hope I can help other kids with art to further their creativity and passion for art.",
    image: liamPhoto,
  },
  {
    name: "Karla Cruz Velasquez",
    title: "Communications Director",
    description:
      "Hello! My name is Karla Cruz Velasquez. I'm a freshman at Quince Orchard High School, and my role is Communications Director in this program. As a child, I didn't have opportunities like my peers to express myself through art, which impacted me hard as I grew up. now, I joined SparkArts in hopes of making those kids who aren't very privileged experience something every kid should without any cost blocking it.",
    image: karlaPhoto,
  },
  {
    name: "Joshua Vu",
    title: "Volunteer Engagement Director",
    description:
      "Hey, I'm Josh! I'm a sophmore at Poolesville High School and the Volunteer Director at SparkArts. As a kid, I didn't have the big interest in art, but now, I love the endless ways art can be expressed through. I want to help people find their creativity and passion through art early with a fostering community. I hope we can inspire and support everyone!",
    image: joshuaPhoto,
  },
  {
    name: "Gabriel Yee",
    title: "Program Director",
    description:
      "Hey there! I'm a sophmore at the Montgomery College MC program at Northwest HS. As Program Director of SparkArts, I strive to organize a place where students have a creative outlet to explore and express their passions in the arts.",
    image: gabrielPhoto,
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleClose = () => {
    setSelectedMember(null);
  };

  /*
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';  // Disable scrolling
    } else {
      document.body.style.overflow = 'auto';   // Enable scrolling
    }
  }, [selectedMember]);
  */

  return (
    <section
      className="py-24"
      style={{ backgroundColor: "#faf2e9" }}
      onClick={handleClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-1 text-black-300">
          MEET THE TEAM
        </h2>
        <h4 className="text-2xl text-center mb-16 text-black-300">
          Click on a photo for more information about us!
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative rounded-lg overflow-hidden shadow-lg h-[400px] border-2 border-pink-300"
              onClick={(e) => {
                e.stopPropagation(); // Prevent click event from bubbling up
                handleClick(member);
              }}
              style={{ cursor: "pointer" }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-opacity duration-300" // Image scale on hover
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")} // Only opacity for the image
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              />
              {/* Info underline */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-85 p-4 text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-pink-400">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
          onClick={handleClose}
        >
          <div
            className="relative bg-white rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl border-8 border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Speech bubble tail */}
            {/*
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-gray-800"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-[16px] border-r-[16px] border-t-[16px] border-l-transparent border-r-transparent border-t-white"></div>
            </div>
            */}

            {/* Content */}
            <div className="text-center">
              <div className="mb-4">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-30 h-40 rounded-full mx-auto object-cover border-4 border-pink-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedMember.name}
              </h3>
              <p className="text-lg text-pink-600 font-semibold mb-4">
                {selectedMember.title}
              </p>
              <p className="text-gray-800 leading-relaxed">
                "{selectedMember.description}"
              </p>
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
