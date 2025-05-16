
import React from "react";

export default function Info() {
  return (
    <section className="py-24" style={{ backgroundColor: "#faf2e9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-16">Meet SparkArts</h2>

        {/* About Us Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.15752-9/486787749_1372522947326164_4084768397385360335_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=A-O5lL0DtKQQ7kNvwGyTTw5&_nc_oc=AdlbdfHS5BxNhP257cYGpyFuCG6nQATB6pnGZxo1dfpv3nx3NZahMZL-pIQXhNilj-8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-iad3-1.xx&oh=03_Q7cD2AHUCxG07UznClmCsb5ahAGgpDKvKKzd3EK3BVsC2-DqrQ&oe=681E8F0D"
                alt="SparkArts Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-semibold">About Us</h3>
            <p className="text-gray-600 leading-relaxed">
              SparkArts is a student-led initiative dedicated to bringing arts education to underserved communities. 
              Founded by passionate high school students, our mission is to create equal art opportunities 
              without financial barriers. We believe that every child deserves the chance to explore their 
              creativity, develop artistic skills, and experience the joy of self-expression through various 
              art forms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team consists of dedicated young individuals who are committed to making a difference 
              in our community through the power of art and creativity.
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://img.freepik.com/premium-photo/happy-kids-doing-arts-crafts-together_269655-33883.jpg"
                alt="Art Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-semibold">What Do We Do?</h3>
            <p className="text-gray-600 leading-relaxed">
              At SparkArts, we organize free art workshops, classes, and events for children 
              in underserved communities. Our programs cover a wide range of artistic disciplines, 
              including drawing, painting, sculpture, digital art, and more.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We partner with local community centers, schools, and organizations to reach as many 
              children as possible. Our team of volunteers, consisting of talented high school students 
              and professional artists, provides guidance and mentorship to help young artists 
              develop their skills and confidence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through our programs, we aim to inspire creativity, build self-esteem, and create a 
              supportive community where young artists can thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
