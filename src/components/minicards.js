import React from 'react'

 function Minicards(props) {
    return (
        <div className="statcard">
            {props.y.map(el=>
            <div className={el.class}>
                <img src={el.image}/>
                <h3 className="card-title">{el.texte}</h3>
            <p>{el.para}</p>
               
               
               </div>
               
               
               )}

            




        </div>
    )
}


export default Minicards
