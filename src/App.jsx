import './App.css';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Main from './components/Main/Main.jsx';
import MainImage from './components/Main/MainImage.jsx';
import About from './components/About/About.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';
import MapKurba from "./components/Map/Map.jsx";

function App() {
  return (
    <>
      <Header/>
      <Navigation/>
      <Main/>
      <MainImage/>
      <About/>
      <Gallery/>
      <MapKurba/>
      <Footer/>
    </>
  );
}

export default App;
