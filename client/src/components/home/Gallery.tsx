export default function Gallery() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Artists</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the incredible talents shaping our artistic community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1520333789090-1afc82db536a"
              alt="Artist at work"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
                <p>Contemporary Mixed Media Artist</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1507643179773-3e975d7ac515"
              alt="Gallery space"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Marcus Rivera</h3>
                <p>Abstract Expressionist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
