import TermsAndConditions from '../../components/TermsAndConditions';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TermsAndConditions />
      <Footer />
    </main>
  );
} 