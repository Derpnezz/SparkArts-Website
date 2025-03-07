
import React from "react";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import valeriePhoto from "./images/websitephoto_valerie.jpg";
import jessicaPhoto from "./images/websitephoto_jessica.jpg";
import cynthiaPhoto from "./images/websitephoto_cynthia.jpg";
import liamPhoto from "./images/websitephoto_liam.jpg";
import gabrielPhoto from "./images/websitephoto_gabriel.jpg";
import karlaPhoto from "./images/websitephoto_karla.jpg";
import joshuaPhoto from "./images/websitephoto_joshua.jpg";

const teamMembers = [
  {
    name: "Valerie",
    role: "Founder",
    description: "Valerie is the founder of SparkArts. She's passionate about bringing art education to underserved communities and believes in the transformative power of creativity.",
    image: valeriePhoto
  },
  {
    name: "Jessica",
    role: "Co-Founder",
    description: "Jessica co-founded SparkArts with a vision to make art accessible to all children regardless of their background or financial situation.",
    image: jessicaPhoto
  },
  {
    name: "Cynthia",
    role: "Creative Director",
    description: "As Creative Director, Cynthia brings innovative ideas and artistic vision to our programs, ensuring engaging and enriching experiences for all participants.",
    image: cynthiaPhoto
  },
  {
    name: "Liam",
    role: "Operations Manager",
    description: "Liam oversees the day-to-day operations of SparkArts, coordinating workshops and ensuring everything runs smoothly.",
    image: liamPhoto
  },
  {
    name: "Gabriel",
    role: "Tech Lead",
    description: "Gabriel manages our digital presence and technology needs, helping SparkArts reach more communities through online platforms.",
    image: gabrielPhoto
  },
  {
    name: "Karla",
    role: "Outreach Coordinator",
    description: "Karla builds relationships with schools and community centers, expanding our reach to help more children experience the joy of art.",
    image: karlaPhoto
  },
  {
    name: "Joshua",
    role: "Workshop Facilitator",
    description: "Joshua leads many of our workshops, bringing enthusiasm and expertise to inspire young artists to explore their creativity.",
    image: joshuaPhoto
  }
];

export default function Team() {
  return (
    <section className="py-24" style={{ backgroundColor: "#faf2e9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              className="w-full flex items-center justify-between mb-4 hover:bg-[#e6d9c7] border-2 border-[#d4c4b0] rounded-lg px-6 py-7 transition-all duration-200 hover:shadow-md"
            >
              <h2 className="text-6xl font-bold">Meet Our Team</h2>
              <ChevronDown className="h-8 w-8 transition-transform duration-200 [&[data-state=open]>svg]:rotate-180" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                      <div className="relative aspect-square">
                        <img 
                          src={member.image} 
                          alt={`${member.name} - ${member.role}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">{member.name} - {member.role}</h4>
                      <p className="text-gray-600">{member.description}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}
