import Header from '../components/Header';
import Footer from '../components/Footer';
import TouristPoints from "../components/TouristPoints.jsx";
import Informations from "../components/Informations.jsx";
import { Link } from 'react-router-dom';

function Locals() {
  return (
    <>
    <Header/>
    <TouristPoints/>
    <Informations/>
    <Footer/>
    </>
  );
}

export default Locals