import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from"./components/cards"
import Intro from "./components/intro"
import Navbar from "./components/navbar"
import Global from "./components/global"
import Biglogo from "./components/biglogo"
import Pictures from "./components/Pictures"
import Texte from "./components/Texte"
import Footer from "./components/Footer"

const cards=[
  {backgrd:"x",
    for:"for patients",
    description:"Find a doctor, book a visit and solve any health-related doubt",
    selector:[" choose country","tunisia","brazil"],
    // image:"https://www.docplanner.com/img/screen-marketplace@2x.png"
  },
  {backgrd:"y",
for:"for doctors",
description:"Save time managing visits and cut no-shows by half",
// image:"https://www.docplanner.com/img/screen-saas@2x.png"
  }
]

// Pictures
const pictures=[
{image:"https://www.docplanner.com/images/warsaw.png",
 title:"Warsaw",
  
},
{image:"https://www.docplanner.com/images/barcelona.png",
title:"Barcelone",

},
{
  image:"https://www.docplanner.com/images/istanbul.png",
title:"Istanbul",

},
{
  image:"https://www.docplanner.com/images/rome.png",
title:"Rome",

},
{
  image:"https://www.docplanner.com/images/mexico-city.png",
  title:"Mexico city",
   
},
{
  image:"https://www.docplanner.com/images/curitiba.png",
title:"Curitiba",

}

]













function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
     <Cards x={cards}/>
     <Global/>
     <Biglogo/>
     <Texte/>
     <Pictures item={pictures}/>
     <Footer/>


    </div>
  );
}

export default App;
