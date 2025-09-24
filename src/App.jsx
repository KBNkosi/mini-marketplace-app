import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className='font-display'>
        <ProductList />
      </main>
    </>
  );
}

export default App
