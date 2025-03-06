import React from "react";

export default function Team() {
  return (
    <section className="py-24" style={{ backgroundColor: "#faf2e9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-16">MEET SPARKARTS</h2>

        {/* About Us Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
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
                src="https://images.unsplash.com/photo-1559302966-9a941ccbc76e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
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