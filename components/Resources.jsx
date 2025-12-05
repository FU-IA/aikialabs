export default function Resources() {
  return (
    <section className="py-20 px-6 bg-zinc-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Free Resources</h2>
          <p className="text-lg text-zinc-600">Start your AI journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-3 text-black">Weekly AI Insights</h3>
            <p className="text-zinc-600 mb-6">
              Real implementation stories from my businesses. No theory, just practical lessons from the field.
            </p>
            <button className="w-full px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium hover:opacity-90 transition-opacity mt-auto">
              Subscribe
            </button>
          </div>

          <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150 flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-3 text-black">Implementation Starter Pack</h3>
            <p className="text-zinc-600 mb-6">
              Framework I use to evaluate and implement AI across my companies.
            </p>
            <button className="w-full px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium hover:opacity-90 transition-opacity mt-auto">
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

