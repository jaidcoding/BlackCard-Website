import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <VideoSection />
      <About />
      <Footer />
    </main>
  );
}
