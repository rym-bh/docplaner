import React from 'react'

 function Pictures(props) {
    return (
        <div className="country">
           
           {props.item.map(el=>
          <div className="countryImg" >
            <img className="image" src={el.image}/>
            <div className="image1">
            <h3>{el.title}</h3>
            <button className="btn">see openings  </button>
            </div>
            </div>
           )}





        </div>
    )
}


export default Pictures