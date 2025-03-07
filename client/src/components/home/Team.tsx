import React from "react";

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
    image: "/valeriePhoto" // Replace with actual path if needed
  },
  {
    name: "Jessica Lema",
    title: "Outreach Manager",
    description: "Hi, I'm Jessica! I love connecting with people and helping to create opportunities for children to express themselves through art.",
    image: "/jessicaPhoto" // Replace with actual path if needed
  },
  {
    name: "Cynthia Yu",
    title: "Creative Director",
    description: "Hello! I'm Cynthia and I love designing art programs that inspire creativity in young minds and help them develop new skills.",
    image: "/cynthiaPhoto" // Replace with actual path if needed
  },
  {
    name: "Liam Chau",
    title: "Treasurer",
    description: "Hi, I'm Liam Chau and I'm a 9th grader at Northwest HS. I joined SparkArts because when I was in elementary school, whenever I helped other kids out with their work they would be happy that I helped them, and it really sparked my passion for helping other kids. With SparkArts, I hope I can help other kids with art to further their creativity and passion for art.",
    image: "/liamPhoto" // Replace with actual path if needed
  },
  {
    name: "Karla Cruz Velasquez",
    title: "Communications Manager",
    description: "I never got to attend art camp as a kid, so I want to give students the chance to explore creativity and experience the joy of art freely.",
    image: "/karlaPhoto" // Replace with actual path if needed
  },
  {
    name: "Joshua Vu",
    title: "Program Coordinator",
    description: "Hi, I'm Joshua! I'm passionate about creating accessible art programs for all children regardless of their background.",
    image: "/joshuaPhoto" // Replace with actual path if needed
  },
];

export default function Team() {
  return (
    <section className="py-24" style={{ backgroundColor: "#faf2e9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-16 text-black-300">MEET THE TEAM</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="group relative rounded-lg overflow-hidden shadow-lg h-[400px] border-2 border-pink-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              {/* Base caption (always visible) */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-85 p-4 text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-pink-400">{member.title}</p>
              </div>

              {/* Extended caption (visible on hover) */}
              <div className="absolute inset-0 bg-black bg-opacity-85 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex flex-col justify-end">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-pink-400 mb-2">{member.title}</p>
                <p className="text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}