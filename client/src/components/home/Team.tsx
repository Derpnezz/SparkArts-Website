import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
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
    description: "Hi! My name is Valerie Tsang. I'm a freshman at Poolesville High School and the founder of SparkArts! When I was younger, I was privileged to go to art camp every summer. I learned a lot about my interest in art early on, and there were camp counselors who really helped me come out of my shell as a shy kid. I want to help create equal art opportunities without financial barriers. Through SparkArts, I hope all children can be free to explore their artistic creativity, have fun with art, and grow as artists/students.",
    image: valeriePhoto
  },
  {
    name: "Jessica Lema",
    title: "Outreach Manager",
    description: "Hi, my name is Jessica and I'm a freshman at Quince Orchard HS! Seeing the joy of children and people who don't have much especially in times like these, brings nothing but joy to my heart. I'm incredibly blessed to be apart of this initiative and I hope to get as many people involved as possible. matthew 19:14",
    image: jessicaPhoto
  },
  {
    name: "Cynthia Yu",
    title: "Creative Director",
    description: "Hi, I'm Cynthia Yu and I'm a 9th grader at Poolesville High School. Art and drawing has always been an important part of my life so I was excited to join SparkArts to spread it to others. I hope that through SparkArts, I can help other children can find their passion in art, whether it be with color pencils, origami, clay, digital art, and so much more!",
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
    <section className="py-24" style={{ backgroundColor: "#faf2e9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              className="w-full flex items-center justify-between mb-8"
            >
              <h2 className="text-6xl font-bold">Meet Our Team</h2>
              <ChevronDown className="h-6 w-6 transition-transform duration-200 [&[data-state=open]>svg]:rotate-180" />
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="space-y-20">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name}
                  className={cn(
                    "flex flex-col md:flex-row items-center gap-8",
                    index % 2 === 1 && "md:flex-row-reverse"
                  )}
                >
                  <div className="w-full md:w-2/5">
                    <div className="relative w-full rounded-lg shadow-lg overflow-hidden">
                      <AspectRatio ratio={4/5}>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className="w-full md:w-3/5 space-y-4 px-4">
                    <h3 className="text-2xl font-semibold">{member.name}</h3>
                    <p className="text-lg text-gray-600 font-medium">{member.title}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}