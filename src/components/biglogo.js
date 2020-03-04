import React from 'react'
import Minicards from "./minicards"

const mini=[
    
    {class:"statistique",
      image:"https://www.docplanner.com/img/flag.png",
      texte:"leader in 10 countries",
      para:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
    },
    {class:"statistiqueDeux",
      image:"https://www.docplanner.com/img/patients.png",
      texte:"30 million unique patients",
      para:"visit us every month",
    },
    
  {class:"statistique",
    image:"https://www.docplanner.com/img/visits.png",
    texte:"1.5 million appointments",
    para:"booked last month",
  },
  {class:"statistiqueDeux",
    image:"https://www.docplanner.com/img/doctors.png",
    texte:"2 million active doctors",
    para:"trust in our solutions",
  
  }
  
  
  
  
  ]
 function Biglogo() {
    return (
        <div className="Biglogo">
            
           
           
            <div className="c1">
            <h4>
                The world's
                biggest healthcare platform
            </h4>
            <p>
                We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.
            </p>
           
            </div> 
           
            <Minicards y={mini}/>
        
              
</div>
 




        
    )
}


export default Biglogo 
