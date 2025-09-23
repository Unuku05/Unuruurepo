
import Header from "./Headers";
import Footer from "./Footer";
import Navbar from "./NavBar";
export default function Layout({ children }: {children: React.ReactNode }) {
    
  return (
    <div className="min-h-screen flex flex-col">

      <Header />
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        {children}
      </main>

      <Footer />

    </div>
  );
}