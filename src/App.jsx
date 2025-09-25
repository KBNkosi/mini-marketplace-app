import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <main className='font-display flex-grow'>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App
