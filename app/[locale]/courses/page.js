import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function CoursesPage() {
  const testimonials = [
    {
      quote: "Frank's course showed me AI implementations I could actually use Monday morning. The real business examples made all the difference.",
      author: "Elena Rodriguez",
      role: "Marketing Manager",
    },
    {
      quote: "Finally, AI training from someone who actually uses it in their own businesses every day.",
      author: "Klaus Weber",
      role: "Operations Director",
    },
    {
      quote: "Best professional development investment I've made. Saved 15 hours weekly within a month.",
      author: "Sophie Dubois",
      role: "Project Manager",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-black">
            OUR AI COURSES
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-zinc-700">
            Practical AI Training from Real Business Implementations
          </h2>
          <p className="text-lg text-center text-zinc-600 leading-relaxed mb-8">
            I teach AI strategies that have been tested across my education, hospitality, and career services companies. Both courses combine hands-on practice with strategic thinking — the same approach I've used training professionals for 20+ years.
          </p>
          <p className="text-center text-black font-semibold mb-12">
            Which course fits your goals?
          </p>
        </div>
      </section>

      {/* Educators Course */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            The AI-First Mindset Course for Educators
          </h2>
          <p className="text-xl font-semibold mb-8 text-zinc-700">
            Revolutionize your teaching practice and reclaim your time
          </p>

          <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 mb-8">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">🎯 Perfect If You're:</h3>
                <ul className="space-y-2.5 text-zinc-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>K-12 classroom teacher</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Subject coordinator or department head</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Curriculum developer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Educational technology leader</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Teacher training professional</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">⚡ What You'll Transform:</h3>
                <ul className="space-y-2.5 text-zinc-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Eliminate Sunday lesson planning completely</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Automate feedback and assessment creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Design engaging, interactive learning experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Support diverse learners effortlessly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Lead AI innovation in your school</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-black">📍 Course Details:</h3>
                <ul className="space-y-2 text-zinc-600">
                  <li>5 days professional development in Tenerife</li>
                  <li>€490 – Erasmus+ funding eligible</li>
                  <li>Next cohort: October 27–31, 2025</li>
                  <li>25 contact hours for CPD requirements</li>
                </ul>
              </div>
              <div className="flex md:justify-start items-start">
                <button className="w-full md:w-auto px-8 py-3 bg-[#2563eb] text-white rounded-md font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] transition-all duration-150 mt-5">
                  Learn More About This Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* European Professionals Course */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            The AI-First Mindset Course for European Professionals
          </h2>
          <p className="text-xl font-semibold mb-8 text-zinc-700">
            Transform your daily work with proven AI strategies
          </p>

          <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 mb-8">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">🎯 Perfect If You're:</h3>
                <ul className="space-y-2.5 text-zinc-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Marketing coordinator or manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Project manager or operations specialist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>HR administrator or business professional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Seeking practical efficiency gains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Working in European business environment</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">⚡ What You'll Achieve:</h3>
                <ul className="space-y-2.5 text-zinc-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Save 8–10 hours weekly through AI automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Master voice-first workflows and mobile productivity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Implement GDPR-compliant AI solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Create professional content 3x faster</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Become your team's AI resource</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-black">📍 Course Details:</h3>
                <ul className="space-y-2 text-zinc-600">
                  <li>5 days intensive in Tenerife</li>
                  <li>€790 – Bildungsurlaub eligible</li>
                  <li>Next cohort: March 2025</li>
                  <li>Small groups for personalized attention</li>
                </ul>
              </div>
              <div className="flex md:justify-start items-start">
                <button className="w-full md:w-auto px-8 py-3 bg-[#2563eb] text-white rounded-md font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] transition-all duration-150 mt-15">
                  Learn More About This Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Experience */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-black">
            COURSE EXPERIENCE
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-zinc-700">
            Learn in Paradise
          </h3>
          <p className="text-lg text-center text-zinc-600 mb-2">
            <strong className="text-black">FU International Academy, Puerto de la Cruz, Tenerife</strong>
          </p>
          <p className="text-center text-zinc-600 mb-12">
            Both courses combine intensive learning with the inspiring environment of Tenerife. Professional development in a beautiful setting with cultural activities and networking opportunities.
          </p>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-black">
              What Past Participants Say:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-zinc-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 flex flex-col h-full">
                  <p className="text-zinc-700 mb-4 italic flex-grow">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-black">{testimonial.author}</p>
                    <p className="text-sm text-zinc-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Deciding Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            STILL DECIDING?
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center text-zinc-700">
            Get More Information
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12 items-stretch">
            <div className="text-center flex flex-col h-full">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="text-lg font-semibold mb-2 text-black">Free Resources</h4>
              <p className="text-zinc-600 mb-4">
                Detailed curriculum breakdown for both courses<br />
                Real AI implementation stories from my businesses
              </p>
              <button className="px-6 py-2 bg-[#2563eb] text-white rounded-md font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] transition-all duration-150 mt-auto">
                Subscribe to Weekly Insights
              </button>
            </div>

            <div className="text-center flex flex-col h-full">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-lg font-semibold mb-2 text-black">Questions?</h4>
              <p className="text-zinc-600 mb-4">
                <strong>Email:</strong>{" "}
                <a href="mailto:frank@aikialabs.com" className="text-black hover:underline">
                  frank@aikialabs.com
                </a>
                <br />
                I personally respond to all course inquiries within 24 hours.
              </p>
              <div className="mt-auto h-[44px]" />
            </div>

            <div className="text-center flex flex-col h-full">
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="text-lg font-semibold mb-2 text-black">See the AI in Action</h4>
              <p className="text-zinc-600 mb-4">
                Real implementations you'll learn from in both courses
              </p>
              <Link
                href="/#case-studies"
                className="inline-block px-6 py-2 bg-[#2563eb] text-white rounded-md font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] transition-all duration-150 mt-auto"
              >
                View Our Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-black">
            READY TO TRANSFORM YOUR WORK?
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-zinc-700">
            Choose Your Course:
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 flex flex-col h-full">
              <h4 className="text-lg font-semibold mb-2 text-black">
                Business efficiency and automation
              </h4>
              <p className="text-zinc-600 mb-6">European Professionals Course</p>
              <button className="w-full px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium hover:opacity-90 transition-opacity mt-auto">
                Learn More
              </button>
            </div>

            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 flex flex-col h-full">
              <h4 className="text-lg font-semibold mb-2 text-black">
                Teaching transformation and student engagement
              </h4>
              <p className="text-zinc-600 mb-6">Educators Course</p>
              <button className="w-full px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium hover:opacity-90 transition-opacity mt-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

