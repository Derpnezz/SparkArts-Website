
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    title: "Executive Director",
    description: "With over 15 years of experience in arts education, Sarah leads our organization with passion and vision. She has transformed numerous community art programs and believes in the power of creativity to change lives.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    title: "Creative Director",
    description: "Michael brings his innovative approach to our artistic programs. His background in fine arts and digital media helps bridge traditional and contemporary art forms in our community initiatives.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    title: "Community Outreach Manager",
    description: "Elena specializes in creating meaningful connections between artists and communities. Her work has been instrumental in expanding our reach to underserved neighborhoods.",
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
