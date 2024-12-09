import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Main from './components/Main/Main.jsx';
import MainImage from './components/Main/MainImage.jsx';
import About from './components/About/About.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navigation />
      <Main />
      <MainImage />
      <About />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
