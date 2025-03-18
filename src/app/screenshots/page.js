import Screenshots from '../../components/Screenshots';
import BackButton from '../../components/BackButton';

export default function ScreenshotsPage() {
  return (
    <main className="min-h-screen bg-black">
      <BackButton />
      <div className="pt-64 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            BlackCard Screenshots
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Explore the beautiful interface and immersive gameplay of BlackCard through our collection of screenshots.
          </p>
          <Screenshots />
        </div>
      </div>
    </main>
  );
} 