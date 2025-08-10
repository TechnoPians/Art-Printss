const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
          </div>

          {/* Main Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6">
                {/* Owner Image */}
                <div className="flex justify-center mb-8">
                  <img
                    src="/images/owner.jpg" // Place your image in public/images/owner.jpg
                    alt="Owner"
                    className="w-40 h-40 rounded-full border-4 border-[#327fe9] object-cover shadow-lg"
                  />
                </div>

                <p className="text-xl md:text-2xl text-white font-semibold mb-8">
                  Welcome to Arts & Prints - Your Premier Custom Printing Partner
                </p>

                <p>
                  Art & Prints by JOVER is a creative team based in Passi City, Iloilo, specializing in custom-printed products like T-shirts, mugs, caps, tote bags, and more.
                  Rooted in both traditional and digital art, we combine creativity and craftsmanship to produce designs that reflect your unique style — perfect for personal use, branding, or special events.
                  From concept to production, we handle every step to ensure high-quality, lasting results. With over 1,000 satisfied clients locally and internationally, we're passionate about turning your ideas into custom creations.
                  Art & Prints — Quality is Our Signature.
                </p>

                {/* Contact Section */}
                <div className="bg-white/10 rounded-xl p-6 mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                  <div className="space-y-3 text-lg">
                    <p>
                      <strong className="text-[#327fe9]">Owner:</strong> Jover
                    </p>
                    <p>
                      <strong className="text-[#327fe9]">Business Address:</strong><br />
                      Batu Passi City, Purok 4 <br />
                      Iloilo Philippines
                    </p>
                    <p>
                      <strong className="text-[#327fe9]">Phone:</strong> 0912345678
                    </p>
                    <p>
                      <strong className="text-[#327fe9]">Email:</strong> alexisjover@gmail.com
                    </p>
                    <p>
                      <strong className="text-[#327fe9]">Facebook:</strong>{" "}
                      <a
                        href="https://www.facebook.com/YOUR_PAGE_LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#327fe9] hover:underline"
                      >
                        Visit our Facebook Page
                      </a>
                    </p>
                    <p>
                      <strong className="text-[#327fe9]">Business Hours:</strong><br />
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <p>
                  We invite you to experience the Arts & Prints difference. Whether you need a single 
                  custom mug or a large order of branded merchandise, we're here to exceed your expectations. 
                  Contact us today to discuss your custom printing needs and discover why businesses and 
                  individuals throughout the region choose Arts & Prints for their most important projects.
                </p>

                <div className="text-center mt-12">
                  <p className="text-xl text-[#327fe9] font-semibold">
                    "Your Vision, Our Expertise - Arts & Prints Where Quality Meets Creativity"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
