import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-black">
            Recent Blog Posts
          </h1>
          <p className="text-lg text-center text-zinc-600 mb-12">
            Explore the latest insights and practical AI strategies
          </p>
        </div>
      </section>

      {/* No Posts Message */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white border border-zinc-100 rounded-xl p-12 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
              No Blog Posts Found
            </h2>
            <p className="text-zinc-600">
              There are currently no blog posts to display.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

