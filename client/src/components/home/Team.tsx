
import { cn } from "@/lib/utils";

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
    description: "Hi!! My name is Valerie Tsang. I'm a freshman at Poolesville High School and the founder of SparkArts! When I was younger, I was privileged to go to art camp every summer. I learned a lot about my interest in art early on, and there were camp counselors who really helped me come out of my shell as a shy kid. I want to help create equal art opportunities without financial barriers. Through SparkArts, I hope all children can be free to explore their artistic creativity, have fun with art, and grow as artists/students.",
    image: "./images/websitephoto_valerie.jpg"
  },
  {
    name: "Jessica Lema",
    title: "Outreach Manager",
    description: "Hi, my name is Jessica and I'm a freshman at Quince Orchard HS and the secretary at SparkArts! Seeing the joy of children and people who don’t have much especially in times like these, brings nothing but joy to my heart. I’m incredibly blessed to be apart of this initiative and I hope to get as many people involved as possible. matthew 19:14",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Cynthia Yu",
    title: "Creative Director",
    description: "Hi, I'm Cynthia Yu and I'm a 9th grader at Poolesville High School. I'm the creative director for SparkArts! Art and drawing has always been an important part of my life so I was excited to join SparkArts to spread it to others. I hope that through SparkArts, I can help other children can find their passion in art, whether it be with color pencils, origami, clay, digital art, and so much more!",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Liam Chau",
    title: "Treasurer",
    description: "Hi, I'm Liam Chau! I'm a 9th grader at Northwest HS and the treasurer at SparkArts. I joined SparkArts because when I was in elementary school, whenever I helped other kids out with their work they would be happy that I helped them, and it really sparked my passion for helping other kids. With SparkArts, I hope I can help other kids with art to further their creativity and passion for art.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Gabriel Yee",
    title: "Program Director",
    description: "Hi, I'm Gabriel Yee! I'm a 9th grader at Northwest HS and I'm the Program Director for SparkArts! When I was a child, I didn't have many creative opportunities and it caused me to feel trapped and demotivated. With SparkArts, I hope to be able to give children a creative outlet where they can express their passions in arts.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Karla Cruz Velasquez",
    title: "Communications Manager",
    description: "Hello! My name is Karla Cruz Velasquez. I’m a freshman at Quince Orchard High School and my role is communications manager in this program. Growing up I didn’t have many opportunities. When I was younger I remember always wanting to go to an art camp every summer, but I wasn’t very privileged like my peers which made it hard for me to express myself. I also felt like i could not improve in my interest in art , which gave me a trapped feeling. During my time in this program, I hope to make students come and express themselves through art, and to be able to do things they are genuinely interested in without their parents needing to work harder just for their own kid’s happiness because happiness never has to come with a price.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Joshua Vu",
    title: "Volunteer Engagement Manager",
    description: "Hey, I’m Josh! I’m a freshman at Poolesville High School and the Volunteer Engagement Manager at SparkArts. As a kid, I didn’t have a big interest in art but I learned how dynamic and expressive it can be. I want to help people find their creativity and passion through art early with a fostering community. I hope we can inspire and support everyone!",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Team() {
  return (
    <section className="py-24" style={{ backgroundColor: "#faf2e9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
        <div className="space-y-20">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className={cn(
                "flex flex-col md:flex-row items-center gap-8",
                index % 2 === 1 && "md:flex-row-reverse"
              )}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-lg text-gray-600 font-medium">{member.title}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
