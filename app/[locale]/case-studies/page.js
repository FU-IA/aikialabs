import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudiesPage() {
  const implementationInsights = [
    {
      title: "Business-First Approach",
      description: "Every AI implementation started with a clear business problem and measurable success criteria. Technology served business needs, not the other way around.",
    },
    {
      title: "European Compliance Foundation",
      description: "We prioritize compliance with European regulations, ensuring our AI education programs meet the highest standards of data protection and ethical AI practices.",
    },
    {
      title: "Human-AI Collaboration",
      description: "Our approach integrates human insights with AI capabilities, fostering better decision-making and more effective learning outcomes for educators and professionals.",
    },
    {
      title: "Continuous Optimization",
      description: "We continuously optimize our AI courses and consulting services, ensuring they remain cutting-edge and aligned with the evolving needs of the education sector.",
    },
    {
      title: "Privacy by Design",
      description: "We are committed to privacy by design, ensuring data protection is a core principle in all our AI education programs and consulting services from the outset.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-black">
            REAL AI IMPLEMENTATIONS
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-zinc-700">
            See How AI Transforms Actual Businesses
          </h2>
          <p className="text-lg text-center text-zinc-600 leading-relaxed">
            These aren't theoretical case studies—they're active AI implementations across my companies that I personally designed and optimize. Every technique taught in our courses comes from these real business operations.
          </p>
        </div>
      </section>

      {/* Education Sector */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            EDUCATION SECTOR TRANSFORMATIONS
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-zinc-700">
            FU International Academy & Learning in the Sun
          </h3>

          {/* Case Study 1 */}
          <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 mb-8">
            <h4 className="text-2xl font-bold mb-6 text-black">
              Student Placement Optimization System
            </h4>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The Challenge:</h5>
              <p className="text-zinc-600">
                Placing international students across 24 Spanish proficiency levels with diverse cultural backgrounds from 30+ countries required hours of manual assessment and frequent mismatches.
              </p>
            </div>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The AI Solution:</h5>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li>Multi-factor assessment algorithm analyzing language skills, cultural background, and learning goals</li>
                <li>Automated placement recommendations with 95% accuracy</li>
                <li>Cultural adaptation support integrated into placement decisions</li>
                <li>Progress tracking with intervention triggers for struggling students</li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The Results:</h5>
              <ul className="space-y-2 text-zinc-600">
                <li><strong className="text-black">95% student satisfaction</strong> rate across 2,000+ placements</li>
                <li><strong className="text-black">80% reduction</strong> in placement reassignments</li>
                <li><strong className="text-black">3 hours daily</strong> saved on administrative assessment tasks</li>
                <li><strong className="text-black">40% improvement</strong> in student retention rates</li>
              </ul>
            </div>
            <p className="text-zinc-700 italic">
              <strong>What You'll Learn:</strong> How to build assessment systems that consider multiple data points for personalized recommendations.
            </p>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 mb-8">
            <h4 className="text-2xl font-bold mb-6 text-black">
              Multilingual Communication Automation
            </h4>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The Challenge:</h5>
              <p className="text-zinc-600">
                Managing inquiries in German, English, and Spanish from prospective students across different time zones while maintaining personalized responses.
              </p>
            </div>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The AI Solution:</h5>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li>Automated initial response system with language detection</li>
                <li>Cultural context integration for appropriate communication styles</li>
                <li>Escalation triggers for complex inquiries requiring human intervention</li>
                <li>Follow-up sequences tailored to student journey stage</li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The Results:</h5>
              <ul className="space-y-2 text-zinc-600">
                <li><strong className="text-black">70% of inquiries</strong> handled automatically with high satisfaction</li>
                <li><strong className="text-black">24/7 availability</strong> across multiple time zones</li>
                <li><strong className="text-black">60% faster</strong> response time to prospective students</li>
                <li><strong className="text-black">50% reduction</strong> in administrative communication workload</li>
              </ul>
            </div>
            <p className="text-zinc-700 italic">
              <strong>What You'll Learn:</strong> How to automate customer communication while maintaining cultural sensitivity and personal touch.
            </p>
          </div>

          {/* Case Study 3 */}
          <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 mb-8">
            <h4 className="text-2xl font-bold mb-6 text-black">
              Curriculum Personalization Engine
            </h4>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The Challenge:</h5>
              <p className="text-zinc-600">
                Creating individualized learning paths for students with varying backgrounds, goals, and learning speeds in our Spanish programs.
              </p>
            </div>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The AI Solution:</h5>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li>Progress analysis with predictive modeling for optimal pacing</li>
                <li>Content adaptation based on cultural learning preferences</li>
                <li>Automatic difficulty adjustment with engagement monitoring</li>
                <li>Intervention recommendations for struggling learners</li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The Results:</h5>
              <ul className="space-y-2 text-zinc-600">
                <li><strong className="text-black">40% increase</strong> in student retention</li>
                <li><strong className="text-black">30% improvement</strong> in learning outcome assessments</li>
                <li><strong className="text-black">2 hours daily</strong> saved on individual lesson customization</li>
                <li><strong className="text-black">Higher satisfaction</strong> scores across all proficiency levels</li>
              </ul>
            </div>
            <p className="text-zinc-700 italic">
              <strong>What You'll Learn:</strong> How to create adaptive learning systems that respond to individual student needs and progress patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Hospitality Operations */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            HOSPITALITY OPERATIONS REVOLUTION
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-zinc-700">
            FU Café - Smart Restaurant Management
          </h3>

          {/* Case Study 4 */}
          <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-black">
                  AI Inventory Management System
                </h4>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The Challenge:</h5>
                  <p className="text-zinc-600">
                    Balancing fresh ingredient availability with minimal waste in a café serving unpredictable tourist and local customer flows.
                  </p>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The AI Solution:</h5>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                    <li>Weather-based demand forecasting integrated with local event calendars</li>
                    <li>Real-time inventory tracking with automatic reorder triggers</li>
                    <li>Menu optimization based on ingredient availability and profitability</li>
                    <li>Waste pattern analysis with prevention recommendations</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The Results:</h5>
                  <ul className="space-y-2 text-zinc-600">
                    <li><strong className="text-black">60% reduction</strong> in food waste</li>
                    <li><strong className="text-black">25% improvement</strong> in profit margins</li>
                    <li><strong className="text-black">4 hours weekly</strong> saved on inventory management</li>
                    <li><strong className="text-black">Improved menu availability</strong> during peak periods</li>
                  </ul>
                </div>
                <p className="text-zinc-700 italic">
                  <strong>What You'll Learn:</strong> How to build predictive systems that optimize resource allocation and reduce operational waste.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src="/fucafe.jpg"
                  alt="FU Café AI Inventory Management"
                  width={400}
                  height={200}
                  className="w-full max-w-md h-150 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* miniFU Section */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-zinc-700">
            miniFU - Booking Conflict Resolution
          </h3>

          {/* Case Study 5 */}
          <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-black">
                  Smart Scheduling Algorithm
                </h4>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The Challenge:</h5>
                  <p className="text-zinc-600">
                    Managing birthday party bookings, regular playground sessions, and special events in shared spaces with frequent conflicts and customer complaints.
                  </p>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The AI Solution:</h5>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                    <li>Multi-resource scheduling with conflict prevention</li>
                    <li>Customer preference learning and automatic suggestions</li>
                    <li>Capacity optimization with revenue maximization</li>
                    <li>Automated communication for booking confirmations and changes</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The Results:</h5>
                  <ul className="space-y-2 text-zinc-600">
                    <li><strong className="text-black">80% reduction</strong> in booking conflicts</li>
                    <li><strong className="text-black">95% customer satisfaction</strong> rate for party bookings</li>
                    <li><strong className="text-black">3 hours daily</strong> saved on scheduling management</li>
                    <li><strong className="text-black">30% increase</strong> in booking efficiency and revenue</li>
                  </ul>
                </div>
                <p className="text-zinc-700 italic">
                  <strong>What You'll Learn:</strong> How to create intelligent scheduling systems that prevent conflicts while optimizing resource utilization.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src="/minifu.png"
                  alt="miniFU Booking System"
                  width={400}
                  height={200}
                  className="w-auto max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Case Study 6 */}
          <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-black">
                  Customer Experience Personalization
                </h4>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The Challenge:</h5>
                  <p className="text-zinc-600">
                    Providing consistent, personalized service across different customer types (families, birthday parties, regular visitors) with limited staff.
                  </p>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The AI Solution:</h5>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                    <li>Customer history analysis with preference tracking</li>
                    <li>Automated loyalty program management with personalized rewards</li>
                    <li>Service recommendation engine based on past visits</li>
                    <li>Staff notification system for VIP customer recognition</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The Results:</h5>
                  <ul className="space-y-2 text-zinc-600">
                    <li><strong className="text-black">85% increase</strong> in repeat customer visits</li>
                    <li><strong className="text-black">40% improvement</strong> in average spend per visit</li>
                    <li><strong className="text-black">Staff efficiency</strong> increased through automated customer insights</li>
                    <li><strong className="text-black">Reduced complaints</strong> through proactive service customization</li>
                  </ul>
                </div>
                <p className="text-zinc-700 italic">
                  <strong>What You'll Learn:</strong> How to leverage customer data for personalized service delivery without overwhelming your team.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src="/experience.png"
                  alt="Customer Experience Personalization"
                  width={400}
                  height={200}
                  className="w-auto max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Services */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            CAREER SERVICES INNOVATION
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-zinc-700">
            Career Bridge Europe - International Placement
          </h3>

          {/* Case Study 7 */}
          <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-black">
                  Student-Opportunity Matching Algorithm
                </h4>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The Challenge:</h5>
                  <p className="text-zinc-600">
                    Matching international students with appropriate internships and job opportunities across European markets with different requirements and cultural contexts.
                  </p>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The AI Solution:</h5>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                    <li>Skills assessment with gap analysis and development recommendations</li>
                    <li>Cultural fit evaluation for international placements</li>
                    <li>Employer requirement matching with success probability scoring</li>
                    <li>Progress tracking with career pathway optimization</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The Results:</h5>
                  <ul className="space-y-2 text-zinc-600">
                    <li><strong className="text-black">95% satisfaction rate</strong> across 2,000+ student placements</li>
                    <li><strong className="text-black">75% reduction</strong> in mismatched placements</li>
                    <li><strong className="text-black">5 hours daily</strong> saved on manual candidate screening</li>
                    <li><strong className="text-black">90% successful completion</strong> rate for international programs</li>
                  </ul>
                </div>
                <p className="text-zinc-700 italic">
                  <strong>What You'll Learn:</strong> How to build matching systems that consider multiple complex factors for optimal outcomes.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src="/career.png"
                  alt="Career Services Student-Opportunity Matching"
                  width={400}
                  height={200}
                  className="w-full max-w-md h-150 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Case Study 8 */}
          <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-black">
                  Cultural Adaptation Support System
                </h4>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The Challenge:</h5>
                  <p className="text-zinc-600">
                    Helping international students adapt to different European work cultures while maintaining their unique strengths and perspectives.
                  </p>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The AI Solution:</h5>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                    <li>Cultural context analysis with adaptation recommendations</li>
                    <li>Personalized integration support based on background and destination</li>
                    <li>Progress monitoring with intervention triggers for struggling adaptations</li>
                    <li>Success pattern analysis for continuous improvement</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-black">The Results:</h5>
                  <ul className="space-y-2 text-zinc-600">
                    <li><strong className="text-black">60% reduction</strong> in early program dropout</li>
                    <li><strong className="text-black">80% improvement</strong> in cultural adaptation success</li>
                    <li><strong className="text-black">Scalable support</strong> across multiple European destinations</li>
                    <li><strong className="text-black">Higher employer satisfaction</strong> with international candidates</li>
                  </ul>
                </div>
                <p className="text-zinc-700 italic">
                  <strong>What You'll Learn:</strong> How to create support systems that help people navigate complex cultural and professional transitions.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src="/cultural.png"
                  alt="Cultural Adaptation Support System"
                  width={400}
                  height={200}
                  className="w-full max-w-md h-150 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            TRAVEL & ACCOMMODATION OPTIMIZATION
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-zinc-700">
            Hostel Campus & Canary Campus Travels
          </h3>

          {/* Case Study 9 */}
          <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 mb-8">
            <h4 className="text-2xl font-bold mb-6 text-black">
              Guest Experience Optimization
            </h4>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The Challenge:</h5>
              <p className="text-zinc-600">
                Providing personalized accommodation and travel experiences for diverse international guests with varying preferences and budgets.
              </p>
            </div>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The AI Solution:</h5>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li>Guest preference analysis with personalized recommendations</li>
                <li>Dynamic pricing optimization based on demand and occupancy</li>
                <li>Experience curation based on guest profiles and local opportunities</li>
                <li>Automated communication with cultural sensitivity</li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The Results:</h5>
              <ul className="space-y-2 text-zinc-600">
                <li><strong className="text-black">90% guest satisfaction</strong> across accommodation services</li>
                <li><strong className="text-black">35% increase</strong> in revenue through optimized pricing</li>
                <li><strong className="text-black">4 hours daily</strong> saved on guest service coordination</li>
                <li><strong className="text-black">Higher repeat booking</strong> rates through personalized experiences</li>
              </ul>
            </div>
            <p className="text-zinc-700 italic">
              <strong>What You'll Learn:</strong> How to create personalized guest experiences that scale across different service levels and cultural contexts.
            </p>
          </div>
        </div>
      </section>

      {/* Integrated Operations */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            INTEGRATED OPERATIONS MANAGEMENT
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-zinc-700">
            Cross-Business AI Coordination
          </h3>

          {/* Case Study 10 */}
          <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 mb-8">
            <h4 className="text-2xl font-bold mb-6 text-black">
              Multi-Business Resource Optimization
            </h4>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The Challenge:</h5>
              <p className="text-zinc-600">
                Coordinating staff, resources, and operations across 9+ brands with different peak periods, requirements, and customer bases.
              </p>
            </div>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The AI Solution:</h5>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li>Cross-business scheduling optimization with conflict prevention</li>
                <li>Resource allocation algorithms considering all business needs</li>
                <li>Performance analytics across the entire business ecosystem</li>
                <li>Predictive planning for seasonal variations and special events</li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3 text-black">The Results:</h5>
              <ul className="space-y-2 text-zinc-600">
                <li><strong className="text-black">90% reduction</strong> in cross-business scheduling conflicts</li>
                <li><strong className="text-black">25% improvement</strong> in overall operational efficiency</li>
                <li><strong className="text-black">300% business growth</strong> without proportional staff increases</li>
                <li><strong className="text-black">Unified management</strong> of complex multi-business operations</li>
              </ul>
            </div>
            <p className="text-zinc-700 italic">
              <strong>What You'll Learn:</strong> How to create integrated systems that optimize resources across multiple related businesses or departments.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Insights */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            IMPLEMENTATION INSIGHTS
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-zinc-700">
            What Makes These Implementations Successful
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationInsights.map((insight, index) => (
              <div key={index} className="bg-white border border-zinc-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
                <h4 className="text-lg font-semibold mb-3 text-black">{insight.title}</h4>
                <p className="text-zinc-600">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Applications */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            Course Applications
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-zinc-700">
            Learn these strategies
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-2xl font-bold mb-4 text-black">
                For European Professionals
              </h4>
              <p className="text-zinc-600 mb-6">
                These case studies provide the foundation for our AI-First Mindset Course for European Professionals. You'll learn the strategic thinking and implementation frameworks behind these successes.
              </p>
              <Link
                href="/courses"
                className="inline-block px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Learn More About Professional Course
              </Link>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-2xl font-bold mb-4 text-black">
                For Educators
              </h4>
              <p className="text-zinc-600 mb-6">
                The educational implementations showcase what's possible in our AI-First Mindset Course for Educators. See how AI can transform teaching practice and student outcomes.
              </p>
              <Link
                href="/courses"
                className="inline-block px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Learn More About Educator Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            IMPLEMENTATION METHODOLOGY
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-zinc-700">
            How We Approach AI Projects
          </h3>

          <div className="space-y-8">
            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">Phase 1: Problem Definition (Week 1)</h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li>Business process analysis and pain point identification</li>
                <li>Success criteria definition with measurable outcomes</li>
                <li>Stakeholder alignment and change management planning</li>
                <li>Technical feasibility assessment with compliance review</li>
              </ul>
            </div>

            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">Phase 2: Solution Design (Week 2-3)</h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li>AI strategy development with European compliance integration</li>
                <li>System architecture design with privacy by design principles</li>
                <li>User experience planning with cultural considerations</li>
                <li>Testing framework establishment with success metrics</li>
              </ul>
            </div>

            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">Phase 3: Implementation (Week 4-8)</h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li>Phased rollout with continuous monitoring</li>
                <li>Staff training and change management support</li>
                <li>Performance optimization and adjustment</li>
                <li>Integration with existing business systems</li>
              </ul>
            </div>

            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">Phase 4: Optimization (Ongoing)</h4>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                <li>Performance analysis and improvement recommendations</li>
                <li>User feedback integration and system refinement</li>
                <li>Scaling opportunities identification</li>
                <li>Continuous compliance monitoring and updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
            RESULTS SUMMARY
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-zinc-700">
            Quantified Business Impact Across All Implementations
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-lg font-semibold mb-4 text-black">Time Savings</h4>
              <ul className="space-y-2 text-zinc-600 text-sm">
                <li><strong>20+ hours weekly</strong> saved across personal management tasks</li>
                <li><strong>15+ hours daily</strong> saved across all business operations</li>
                <li><strong>300% efficiency improvement</strong> in administrative tasks</li>
                <li><strong>50% faster</strong> customer service response times</li>
              </ul>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-lg font-semibold mb-4 text-black">Financial Impact</h4>
              <ul className="space-y-2 text-zinc-600 text-sm">
                <li><strong>25% average profit margin</strong> improvement across hospitality operations</li>
                <li><strong>35% revenue increase</strong> through optimized pricing and experiences</li>
                <li><strong>60% cost reduction</strong> in waste and operational inefficiencies</li>
                <li><strong>ROI achieved</strong> within 3–6 months for all major implementations</li>
              </ul>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-lg font-semibold mb-4 text-black">Quality Improvements</h4>
              <ul className="space-y-2 text-zinc-600 text-sm">
                <li><strong>95% customer satisfaction</strong> maintained across all services</li>
                <li><strong>90% success rate</strong> for complex matching and placement algorithms</li>
                <li><strong>80% reduction</strong> in operational conflicts and errors</li>
                <li><strong>Improved outcomes</strong> for students, guests, and business operations</li>
              </ul>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-lg font-semibold mb-4 text-black">Scalability Achievements</h4>
              <ul className="space-y-2 text-zinc-600 text-sm">
                <li><strong>300% business growth</strong> without proportional staff increases</li>
                <li><strong>Multiple market expansion</strong> enabled through AI efficiency</li>
                <li><strong>Sustainable operations</strong> across 9+ diverse business brands</li>
                <li><strong>Replicable frameworks</strong> adaptable to different industries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-black">
            Learn Our Proven Methodology
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-zinc-700">
            Want to implement similar solutions?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">Through Our Courses</h4>
              <p className="text-zinc-600 mb-6">
                Master the strategic thinking and practical implementation skills behind these successes.
              </p>
              <Link
                href="/courses"
                className="inline-block px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                View All Courses
              </Link>
            </div>

            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">Through Consultation</h4>
              <p className="text-zinc-600 mb-6">
                Work directly with Frank to adapt these strategies to your specific business context.
              </p>
              <button className="w-full px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] transition-all duration-150">
                Inquiry Form
              </button>
            </div>

            <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
              <h4 className="text-xl font-bold mb-4 text-black">Through Our Resources</h4>
              <p className="text-zinc-600 mb-6">
                Access frameworks, templates, and implementation guides based on these real projects.
              </p>
              <button className="w-full px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] transition-all duration-150">
                Download Implementation Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

