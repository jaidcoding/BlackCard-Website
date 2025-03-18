import Screenshots from '../../components/Screenshots';

export default function ScreenshotsPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="pt-32 pb-20">
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