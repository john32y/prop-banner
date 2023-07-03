import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Banner3 from './components/Banner3';
import Banner4 from './components/Banner4';

import Body from './components/Body';
import Footer from './components/Foooter';
import Main from './components/Main';

import './styles/App.css';


const bannerMaterialOne = {
  title: "Black Jacket",
  content: "Guest??",
  bgcolor:"cyan",
  fontColor:"white"
};
const bannerMaterialTwo = {
  title: "Tied Shirt",
  content: "Guest??",
  bgcolor:"orange",
  fontColor:"black"
};

function App() {
  return (
    <>
    <Main />
    <Body />
    <Banner 
      title="Blue Sweater" 
      content= "I Wear White Shoes" 
      bgcolor="pink" 
      fontColor="red" />
    <Banner 
      title="Grey Sweater" 
      content= "I Wear Pink Socks" 
      bgcolor="blue"
      fontColor="blue" />
      <Banner2 info= {bannerMaterialOne}/>
       
       <Banner3 data= {bannerMaterialTwo} />

       <Banner4 
       howMany={3}
       shirt="puma"
       data = {bannerMaterialOne} />
      
      <Footer />
    </>
   
  );
}

export default App;
