import React from 'react'

function cards(props) {
    return (
        <div className="cards2">
            {props.x.map(el=>
             <div className="card" id={el.backgrd}>   
               <h6 >{el.for}</h6>
             <h2>{el.description}</h2>

            <select className="select">
                {
               !el.selector? null :
                
                
                el.selector.map(el=>

                    <option>{el}</option>
                    )}
            </select>
           
             </div> 
                
                )}
        </div>
    )
}
export default cards