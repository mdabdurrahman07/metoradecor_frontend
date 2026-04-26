import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-397px)]">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
