
import './App.css'
import Navbar from './component/navbar/Navbar'
import Hero from './component/Hero/Hero'
import Pricing from './component/Pricing/Pricing'
import About from './component/About/About'
import Feature from './component/features/Feature'
// import ChatBotComp from './component/chatBot/ChatBotComp'
import Footer from './component/Footer/Footer'
function App() {
 

  return (
    <>
      <div className='body-main'>
        <Navbar />
        <Hero />
        <Feature />

        <Pricing />
        <About />
      </div>
      <div className='footer-section'>
        <div className='footer-content'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App
