import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works} from './components';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Infographic from './components/Infographic';
import Faq from './components/Faq';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-r from-zinc-900 via-gray-800 to-sky-800">
        <div className ="">
          <Navbar />
          <Hero />
        </div>
        <Infographic />
        <About />
        {/*<Experience />
        {/* <Tech /> */}
        <Works />
        <Feedbacks />
        <Newsletter />
        <Faq />
        <div className="relative z-0">
          {/*<Contact />*/}
        </div>
      </div>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App
