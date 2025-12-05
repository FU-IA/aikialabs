import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const businessEcosystem = {
    education: [
      {
        name: "FU International Academy Tenerife",
        role: "CEO since 2004",
        services: [
          "Hablamos Español: Spanish courses with 24-level AI-optimized placement system",
          "Learning in the Sun: Erasmus+ programs with AI-powered student-opportunity matching",
          "Hablemos Español: Online Spanish learning with adaptive AI curriculum",
          "SEOintheSUN: Digital marketing education with AI-enhanced content creation",
        ],
      },
    ],
    hospitality: [
      "FU Café: Restaurant with AI inventory management reducing waste by 60%",
      "miniFU: Indoor playground with AI booking system eliminating 80% of conflicts",
      "Co-Working the Sun: Digital nomad workspace with AI-optimized member experience",
    ],
    career: [
      "Career Bridge Europe: International placement with 95% satisfaction through AI matching",
      "Hostel Campus: Student accommodation with AI-enhanced guest experience optimization",
      "Canary Campus Travels: Educational travel with AI-powered experience personalization",
    ],
  };

  const uniqueApproach = [
    {
      title: "Active Business Operations",
      description: "Most AI educators teach theory. I implement AI daily across:",
      details: [
        "Education services (FU International Academy, Learning in the Sun)",
        "Hospitality operations (FU Café, miniFU, Co-Working the Sun)",
        "Career services (Career Bridge Europe)",
        "Travel & accommodation (Canary Campus Travels, Hostel Campus)",
      ],
      note: "Every strategy I teach has been tested with my own money on the line.",
    },
    {
      title: "European Business Reality",
      details: [
        "GDPR compliance expert – all implementations are privacy-first",
        "Multilingual operations in German, English, and Spanish",
        "Cultural adaptation for diverse European markets",
        "Regulatory navigation across multiple European jurisdictions",
      ],
    },
    {
      title: "Business-First Methodology",
      details: [
        "ROI-driven implementations – every AI system must demonstrate value",
        "Human-AI collaboration – AI enhances rather than replaces people",
        "Scalable solutions – frameworks that grow with business needs",
        "Risk management – proven strategies, not experimental approaches",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                MEET FRANK SELLINGSLOH
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-zinc-700">
                Your AI Implementation Guide
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                I'm Frank Sellingsloh, and I've been obsessed with AI since day 5 of ChatGPT's release. But my real credential isn't early adoption—it's that I've successfully implemented AI across multiple real businesses while maintaining quality, compliance, and team satisfaction.
              </p>
              <div className="flex flex-col md:flex-row gap-8 text-zinc-600">
                <div>
                  <strong className="text-black">Location:</strong> Tenerife, Spain
                </div>
                <div>
                  <strong className="text-black">Experience:</strong> 25+ years digital transformation
                </div>
                <div>
                  <strong className="text-black">Active Businesses:</strong> 3 companies with 7+ brands
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl opacity-20 blur-xl"></div>
                <Image
                  src="/frank2.png"
                  alt="Frank Sellingsloh"
                  width={500}
                  height={600}
                  className="relative w-full max-w-md h-auto rounded-xl object-cover shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Journey */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            MY AI JOURNEY
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center text-zinc-700">
            From Business Owner to AI Implementation Expert
          </h3>

          <div className="mb-8 flex justify-center">
            <Image
              src="/optimize.jpg"
              alt="AI Optimization"
              width={800}
              height={375}
              className="w-full max-w-3xl h-110 rounded-lg object-cover object-center"
            />
          </div>

          <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 mb-8">
            <h4 className="text-xl font-bold mb-6 text-black">
              Day 5 After ChatGPT: The Moment Everything Changed
            </h4>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              While most people were still figuring out what ChatGPT was, I was already a paid subscriber. Managing 6+ companies across education, hospitality, and career services was overwhelming—I needed a solution, not a toy.
            </p>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              What started as desperation became revelation. Within weeks, I had:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4 mb-6">
              <li><strong className="text-black">Reduced my weekly workload</strong> from 60+ hours to manageable levels</li>
              <li><strong className="text-black">Automated 80% of routine tasks</strong> across all businesses</li>
              <li><strong className="text-black">Improved customer satisfaction</strong> while reducing operational costs</li>
              <li><strong className="text-black">Enabled 300% business growth</strong> without proportional staff increases</li>
            </ul>
            <div className="bg-zinc-50 border-l-4 border-black p-4 rounded">
              <p className="text-zinc-700 italic">
                <strong>The Realization: AI Wasn't Just Technology—It Was Strategy</strong>
              </p>
              <p className="text-zinc-600 mt-2">
                The breakthrough came when I stopped thinking "How do I use AI?" and started asking "How can AI help me with this?" before every task. That simple shift transformed everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Background */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            MY UNIQUE BACKGROUND
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center text-zinc-700">
            25+ Years of Digital Transformation Leadership
          </h3>

          <div className="space-y-8">
            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">🎓 Educational Foundation</h4>
              <ul className="space-y-2 text-zinc-600">
                <li><strong className="text-black">Economics degree</strong> from University of Göttingen, Germany</li>
                <li><strong className="text-black">Not a computer scientist</strong> – I learned AI through business necessity, not academic theory</li>
                <li><strong className="text-black">Adult learning specialist</strong> with focus on practical application over theoretical knowledge</li>
              </ul>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">🌍 International Business Experience</h4>
              <ul className="space-y-2 text-zinc-600">
                <li><strong className="text-black">Started my first digital marketing agency</strong> in Tenerife in 1999</li>
                <li><strong className="text-black">Erasmus+ coordinator since 2004</strong> – trained 2,000+ international professionals</li>
                <li><strong className="text-black">Built 6+ companies</strong> from startups to market leaders across multiple industries</li>
                <li><strong className="text-black">ISO 9001 certified operations</strong> with Instituto Cervantes accreditation</li>
              </ul>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">🚀 Digital Evolution Witness</h4>
              <ul className="space-y-2 text-zinc-600">
                <li><strong className="text-black">Been through every major digital transformation</strong> since 1999</li>
                <li><strong className="text-black">From affiliate marketing to AI automation</strong> – I've implemented it all</li>
                <li><strong className="text-black">Survived dot-com crashes, social media revolutions, and mobile disruptions</strong></li>
                <li><strong className="text-black">Now leading the AI transformation</strong> with real business implementations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Approach Different */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            WHAT MAKES MY APPROACH DIFFERENT
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-zinc-700">
            Real Implementation vs. Theoretical Knowledge
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {uniqueApproach.map((item, index) => (
              <div key={index} className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
                <h4 className="text-xl font-bold mb-4 text-black">{item.title}</h4>
                {item.description && (
                  <p className="text-zinc-600 mb-4">{item.description}</p>
                )}
                <ul className="space-y-2 text-zinc-600">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-sm">{detail}</li>
                  ))}
                </ul>
                {item.note && (
                  <p className="mt-4 text-sm text-zinc-700 italic">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Ecosystem */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            MY BUSINESS ECOSYSTEM
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-zinc-700">
            Where AI Gets Tested Daily
          </h3>

          <div className="space-y-8">
            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">Education Portfolio</h4>
              {businessEcosystem.education.map((edu, idx) => (
                <div key={idx} className="mb-4">
                  <p className="font-semibold text-black mb-2">{edu.name} <span className="text-zinc-600 font-normal">({edu.role})</span></p>
                  <ul className="list-disc list-inside space-y-1 text-zinc-600 ml-4">
                    {edu.services.map((service, sIdx) => (
                      <li key={sIdx}>{service}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">Hospitality & Experience Brands</h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                {businessEcosystem.hospitality.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">Career & Travel Services</h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                {businessEcosystem.career.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-black text-white rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 text-center">
              <p className="font-semibold">
                <strong>Result:</strong> Integrated ecosystem where AI implementations across one business inform innovations in others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Approach */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            MY TEAM APPROACH
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-zinc-700">
            Collaborative AI Innovation
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">🧠 My Role: Strategy & Concept Generation</h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li>Identify AI opportunities across all business operations</li>
                <li>Design implementation strategies based on real business needs</li>
                <li>Lead course development and educational program delivery</li>
                <li>Guide overall AI direction and strategic decision-making</li>
              </ul>
            </div>

            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">👥 My Team: Development & Optimization</h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li>Skilled developers who turn AI concepts into working business solutions</li>
                <li>Operations specialists who ensure implementations work in real-world conditions</li>
                <li>Testing and refinement experts who optimize performance and user experience</li>
                <li>Cultural adaptation specialists for international and multilingual implementations</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
            <h4 className="text-xl font-bold mb-4 text-black">🤝 Why This Collaboration Works</h4>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
              <li>I understand business problems from 25+ years of operational experience</li>
              <li>My team understands technical implementation and system optimization</li>
              <li>Together we create solutions that are both strategically sound and technically excellent</li>
              <li>Students learn both perspectives – creative AI thinking and practical execution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            MY TEACHING PHILOSOPHY
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-zinc-700">
            Practical Application Over Theoretical Knowledge
          </h3>

          <div className="space-y-8">
            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">🎯 Adult Learning Principles</h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li><strong className="text-black">Immediate relevance</strong> – every technique applies to real work situations</li>
                <li><strong className="text-black">Hands-on practice</strong> – learning by doing, not just discussing</li>
                <li><strong className="text-black">Problem-solving focus</strong> – address actual challenges participants face</li>
                <li><strong className="text-black">Peer collaboration</strong> – learn from diverse professional experiences</li>
              </ul>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">🔄 Implementation-Driven Curriculum</h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li><strong className="text-black">Start with business problems</strong> – not AI capabilities</li>
                <li><strong className="text-black">Show real examples</strong> from my actual business operations</li>
                <li><strong className="text-black">Practice with personal projects</strong> – work on your own challenges</li>
                <li><strong className="text-black">Leave with working systems</strong> – not just knowledge</li>
              </ul>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">🌍 European Context Integration</h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li><strong className="text-black">GDPR compliance</strong> built into every strategy</li>
                <li><strong className="text-black">Cultural sensitivity</strong> for international business environments</li>
                <li><strong className="text-black">Regulatory awareness</strong> for European operational requirements</li>
                <li><strong className="text-black">Multilingual considerations</strong> for diverse market operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Teach */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            WHY I TEACH
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-zinc-700">
            Sharing What Actually Works
          </h3>

          <div className="space-y-8">
            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">Personal Mission</h4>
              <p className="text-zinc-600 leading-relaxed">
                After seeing how AI transformed my own businesses, I realized most professionals are struggling with the same challenges I faced. They know AI is important but don't know where to start or how to implement it effectively.
              </p>
            </div>

            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">Unique Value</h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li><strong className="text-black">Real implementation experience</strong> that most educators lack</li>
                <li><strong className="text-black">Multi-industry perspective</strong> from diverse business operations</li>
                <li><strong className="text-black">European compliance expertise</strong> that US-based trainers don't have</li>
                <li><strong className="text-black">Proven teaching methodology</strong> from 20+ years in professional development</li>
              </ul>
            </div>

            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">Student Outcomes</h4>
              <p className="text-zinc-600 mb-4">My success is measured by student results:</p>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li><strong className="text-black">Immediate time savings</strong> through practical AI applications</li>
                <li><strong className="text-black">Confidence building</strong> with technology integration</li>
                <li><strong className="text-black">Professional advancement</strong> through enhanced capabilities</li>
                <li><strong className="text-black">Business improvement</strong> through effective AI implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Story in Tenerife */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            MY STORY IN TENERIFE
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-zinc-700">
            German Entrepreneur in Spanish Paradise
          </h3>

          <div className="space-y-8">
            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">🏝️ Why Tenerife?</h4>
              <p className="text-zinc-600 mb-4">
                I chose Tenerife as my base in 1999, and it's been the perfect environment for building international businesses:
              </p>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li><strong className="text-black">Strategic European location</strong> with excellent connectivity</li>
                <li><strong className="text-black">Year-round professional development climate</strong> for courses and retreats</li>
                <li><strong className="text-black">International community</strong> that understands diverse business cultures</li>
                <li><strong className="text-black">Innovation-friendly environment</strong> for testing new technologies</li>
              </ul>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">🌍 Global Reach from Island Base</h4>
              <p className="text-zinc-600 mb-4">From Tenerife, I manage:</p>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li><strong className="text-black">European-wide education programs</strong> through Erasmus+ network</li>
                <li><strong className="text-black">International student placements</strong> across 30+ countries</li>
                <li><strong className="text-black">Multilingual business operations</strong> serving diverse markets</li>
                <li><strong className="text-black">AI implementations</strong> adapted for different cultural contexts</li>
              </ul>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">🏖️ Work-Life Integration</h4>
              <p className="text-zinc-600 mb-4">Tenerife enables the work-life balance I teach:</p>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li><strong className="text-black">Professional excellence</strong> in inspiring environment</li>
                <li><strong className="text-black">Cultural richness</strong> that informs international business understanding</li>
                <li><strong className="text-black">Quality of life</strong> that supports long-term creativity and innovation</li>
                <li><strong className="text-black">Perfect setting</strong> for intensive learning experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            CREDENTIALS & RECOGNITION
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-zinc-700">
            Professional Qualifications
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-lg font-semibold mb-4 text-black">Education & Certification</h4>
              <p className="text-zinc-600 text-sm">
                Hands-on AI courses tailored for European educators and professionals. Learn practical skills and stay ahead in the AI landscape.
              </p>
            </div>

            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-lg font-semibold mb-4 text-black">Business Achievements</h4>
              <p className="text-zinc-600 text-sm">
                Strategic AI consulting services to help your organization implement AI solutions effectively and achieve your business goals.
              </p>
            </div>

            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-lg font-semibold mb-4 text-black">International Recognition</h4>
              <p className="text-zinc-600 text-sm">
                Explore real-world AI implementations across education, hospitality, career services, and more. See how AI can transform your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            Get in touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h3 className="text-lg font-semibold mb-4 text-black">📧 Email</h3>
              <p className="text-zinc-600 mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:frank@aikialabs.com" className="text-black hover:underline">
                  frank@aikialabs.com
                </a>
              </p>
              <p className="text-sm text-zinc-600 italic">
                I personally respond to all inquiries within 24 hours
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h3 className="text-lg font-semibold mb-4 text-black">💼 Professional Networks</h3>
              <p className="text-zinc-600 mb-2">
                <strong>LinkedIn:</strong> /in/franksellingsloh
              </p>
              <p className="text-sm text-zinc-600 italic">
                Follow for daily AI implementation insights
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h3 className="text-lg font-semibold mb-4 text-black">📍 Location</h3>
              <p className="text-zinc-600 mb-2">
                <strong>Tenerife, Spain</strong>
              </p>
              <p className="text-sm text-zinc-600 italic">
                Available for courses, consulting, and speaking engagements across Europe
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h3 className="text-lg font-semibold mb-4 text-black">💬 What I Can Help With</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-600 ml-4 text-sm">
                <li>Course selection guidance for your professional development needs</li>
                <li>Implementation questions about AI strategies for your business or educational context</li>
                <li>Speaking opportunities for conferences, institutions, and corporate events</li>
                <li>Consultation inquiries for custom AI implementation projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-black">
            READY TO LEARN TOGETHER?
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-zinc-700">
            Choose Your Path
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-bold mb-4 text-black">Join a Course</h4>
              <p className="text-zinc-600 mb-6">
                Learn proven AI implementation strategies through hands-on professional development programs.
              </p>
              <Link
                href="/courses"
                className="inline-block px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                View Our Courses
              </Link>
            </div>

            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="text-xl font-bold mb-4 text-black">Explore Case Studies</h4>
              <p className="text-zinc-600 mb-6">
                See real AI implementations from my businesses to understand what's possible.
              </p>
              <Link
                href="/case-studies"
                className="inline-block px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Read Implementation Stories
              </Link>
            </div>

            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="text-xl font-bold mb-4 text-black">Stay Connected</h4>
              <p className="text-zinc-600 mb-6">
                Get weekly insights from my ongoing AI implementations across multiple businesses.
              </p>
              <button className="w-full px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] transition-all duration-150">
                Subscribe to Updates
              </button>
            </div>
          </div>

          <p className="text-lg text-zinc-600 italic">
            Ready to transform your work with AI? I'm here to guide you through proven strategies that actually work in real business environments.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

