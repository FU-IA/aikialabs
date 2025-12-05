'use client';

import Header from "../components/Header";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import CaseStudies from "../components/CaseStudies";
import WhyAikia from "../components/WhyAikia";
import About from "../components/About";
import ChatInterface from "../components/ChatInterface";
import Footer from "../components/Footer";
import { TranslationProvider } from "../contexts/TranslationContext";
import { useT } from "../contexts/TranslationContext";

function HomeContent() {
  const t = useT();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Courses />
      <CaseStudies />
      <WhyAikia />
      <About />
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">{t('chat.title')}</h2>
          <ChatInterface />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <TranslationProvider locale="en">
      <HomeContent />
    </TranslationProvider>
  );
}

