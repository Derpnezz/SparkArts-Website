import { Card, CardContent } from "@/components/ui/card";

export default function Story() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Growing up, I was privileged enough to attend art camp over the summer. When i was younger, i was very introverted and shy and never spoke. One summer, there was a camp volunteer who helped me come out of my shell and made me realize the beauty of art. She helped me exercise my creativity, which benefits me and my ideas in the present. I learned and grew a lot because of art, It helped me when I was struggling during covid. I believe that all kids deserve the same opportunities as me, despite their financial status or families situations. Kids cannot choose which family they are born into, so they deserve to have the equal opportunity to have art classes. I've noticed that kids now are not as creative and I think this will pose as a problem when they are older. They exercise their mind less and this will be a road-blocker when they need to find ways to solve issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <img 
                src="https://images.unsplash.com/photo-1629010307583-f27ae0f9662e" 
                alt="Artist working"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Supporting Artists</h3>
              <p className="text-gray-600">
                We provide resources, space, and opportunities for artists to grow and showcase their work.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <img 
                src="https://images.unsplash.com/photo-1541665234574-8e72eb7cd028" 
                alt="Art gallery"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
              <p className="text-gray-600">
                Through exhibitions and workshops, we bring art directly to our local communities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <img 
                src="https://images.unsplash.com/photo-1655988940601-7702d8685f95" 
                alt="Creative workspace"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Education Programs</h3>
              <p className="text-gray-600">
                We believe in art education for all ages, offering classes and workshops year-round.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
