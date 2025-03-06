import React from "react";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import valeriePhoto from "./images/websitephoto_valerie.jpg";
import jessicaPhoto from "./images/websitephoto_jessica.jpg";
import cynthiaPhoto from "./images/websitephoto_cynthia.jpg";
import liamPhoto from "./images/websitephoto_liam.jpg";
import gabrielPhoto from "./images/websitephoto_gabriel.jpg";
import karlaPhoto from "./images/websitephoto_karla.jpg";
import joshuaPhoto from "./images/websitephoto_joshua.jpg";


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
    description: "Hi! I'm Valerie, and I'm the founder of SparkArts! I want to help create equal art opportunities without financial barriers.",
    image: valeriePhoto
  },
  {
    name: "Jessica Lema",
    title: "Outreach Manager",
    description: "Hi, I'm Jessica! I love connecting with people and helping to create opportunities for children to express themselves through art.",
    image: jessicaPhoto
  },
  {
    name: "Cynthia Yu",
    title: "Creative Director",
    description: "Hello! I'm Cynthia and I love designing art programs that inspire creativity in young minds and help them develop new skills.",
    image: cynthiaPhoto
  },
  {
    name: "Liam Chau",
    title: "Treasurer",
    description: "Hi, I'm Liam Chau and I'm a 9th grader at Northwest HS. I joined SparkArts because when I was in elementary school, whenever I helped other kids out with their work they would be happy that I helped them, and it really sparked my passion for helping other kids. With SparkArts, I hope I can help other kids with art to further their creativity and passion for art.",
    image: liamPhoto
  },
  {
    name: "Karla Cruz Velasquez",
    title: "Communications Manager",
    description: "Hello! My name is Karla Cruz Velasquez and I’m a freshman at Quince Orchard High School. Growing up I didn’t have many opportunities. I remember dreaming to go to an art camp every summer, but unlike my peers, I wasn’t very privileged and couldn't go. I also felt like I could not improve in my interest in art, which gave me a trapped feeling. Through this program, I hope to give students the chance to explore their creativity and express themselves freely through art. Happiness shouldn’t come with a price—it should be a gift we all can share.",
    image: karlaPhoto
  },
  {
    name: "Joshua Vu",
    title: "Volunteer Engagement Manager",
    description: "Hey, I’m Josh and I’m a freshman at Poolesville High School. As a kid, I didn’t have a big interest in art but I learned how dynamic and expressive it can be. I want to help people find their creativity and passion through art early with a fostering community. I hope we can inspire and support everyone!",
    image: joshuaPhoto
  },
  {
    name: "Gabriel Yee",
    title: "Program Director",
    description: "Hi, I'm Gabriel Yee and I'm a 9th grader in the Middle College program at Northwest HS! When I was a child, I didn't have many creative opportunities and it caused me to feel trapped and demotivated. With SparkArts, I hope to be able to give children a creative outlet where they can express their passions in arts.",
    image: gabrielPhoto
  }
];

export default function Team() {
  return (
    <section className="py-24" style={{ backgroundColor: "#003366" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-16 text-yellow-300">MEET THE TEAM</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="relative rounded-lg overflow-hidden shadow-lg h-[400px] border-2 border-yellow-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-yellow-300">{member.title}</p>
                <p className="text-sm mt-1">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}