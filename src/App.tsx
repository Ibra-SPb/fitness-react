import Home from './components/home';
import NavBar from './components/nav';
import Benefits from './components/benefits';
import OurClasses from './components/ourClasses';
import ContactUs from './components/contact';
import './index.css';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <div className="app bg-gray-50 text-gray-500">
      <NavBar />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
