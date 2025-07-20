
import React from "react";

import logoWords from "./images/favicon_words.png";
import logoPhoto from "./images/Logo.png";

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
                src={logoPhoto}
                alt="SparkArts Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-semibold">About Us</h3>
            <p className="text-gray-600 leading-relaxed">
              SparkArts is a student-led initiative dedicated to bringing arts education to underserved communities. 
              Our mission is to create equal art opportunities without financial barriers. 
              We believe that every child deserves the chance to explore their creativity, develop artistic skills, 
              and experience the joy of self-expression through various art forms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team consists of dedicated highschool students who are committed to making a difference 
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
