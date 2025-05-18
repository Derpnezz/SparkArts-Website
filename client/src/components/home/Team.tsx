import React from "react";
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
    //description: "Hi! I'm Valerie, and I'm the founder of SparkArts! I want to help create equal art opportunities without financial barriers.",
    description: "With SparkArts, I hope to create a space where children can bring their artistic thoughts to life and explore their creativity freely!",
    image: valeriePhoto
  },
  {
    name: "Jessica Lema",
    title: "Outreach Manager",
    //description: "Hi, I'm Jessica! I love connecting with people and helping to create opportunities for children to express themselves through art.",
    description: "With SparkArts, I strive to create a secure environment for children where they feel safe and loved, and always have someone to look to.",
    image: jessicaPhoto
  },
  {
    name: "Cynthia Yu",
    title: "Creative Director",
    description: "Hi, I’m Cynthia and I joined SparkArts to spread my love and passion for art with others so they’re able to hopefully find their interest in it like I did!",
    image: cynthiaPhoto
  },
  {
    name: "Liam Chau",
    title: "Treasurer",
    description: "I joined SparkArts because I feel happiness when helping and encouraging others. I want to spread my joy and passion to others.",
    image: liamPhoto
  },
  {
    name: "Karla Cruz Velasquez",
    title: "Communications Manager",
    description: "I’ve always been passionate about creating a space where young minds can express themselves freely through art. SparkArts gives real opportunities to grow and explore their creativity.",
    image: karlaPhoto
  },
  {
    name: "Joshua Vu",
    title: "Volunteer Engagement Manager",
    description: "With SparkArts, I want to help students find their creativity and passion through art with a welcoming commmunity!",
    image: joshuaPhoto
  },
  {
    name: "Gabriel Yee",
    title: "Program Director",
    description: "As a child, I lacked creative outlets. With SparkArts, I hope to be able to give children the creative opportunities I didn't have.",
    image: gabrielPhoto
  }
];

export default function Team() {
  return (
    <section className="py-24" style={{ backgroundColor: "#faf2e9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-16 text-black-300">MEET THE TEAM</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="relative rounded-lg overflow-hidden shadow-lg h-[400px] border-2 border-pink-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-85 p-4 text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-pink-400">{member.title}</p>
                {/* <p className="text-sm mt-1">{member.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}