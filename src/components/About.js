import React, { useState, useEffect } from 'react'

export default function About(props) {
    const [myStyle, SetmyStyle] = useState({
        color: 'black', 
        backgroundColor: 'white'
    })
    const [clickColor, setClickColor] = useState({
      color: myStyle.color, 
      backgroundColor: myStyle.backgroundColor,
      status: false
  })

  function HandleClickColor() {
    if(clickColor.status === false){
      if(props.col === 'light'){
        setClickColor({
          color: 'white', 
          backgroundColor: '#212529',
          status: true
        })}
        else{
          setClickColor({
            color: 'black', 
            backgroundColor: 'white',
            status: true
          })
        } 
    }

    else{
      setClickColor({
        color: myStyle.color, 
        backgroundColor: myStyle.backgroundColor,
        status: false
      })
    }
  }
    
    useEffect(() => {
      if(props.col === 'light'){
        SetmyStyle({
          color: 'black', 
        backgroundColor: 'white'
        })
      }
      else{
        SetmyStyle({
          color: 'white', 
        backgroundColor: '#212529'
        })
      }
    }, [props.col]);



  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" onClick={HandleClickColor} style={clickColor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Purpose
      </button>
    </h2>
    <div id="collapseOne" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        When I thought of starting my react journey, my main goal was to focus on fundamentals and understand core principles of React library, which I did while creating this web application. Moreover TextUtils also provides numerous text modification functionalities which one can use for their own purpose without any hassle.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" onClick={HandleClickColor} style={clickColor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Browser compatible
      </button>
    </h2>
    <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This app is compatible with almost all the modern browsers available till date. If any issus are found, please contact me through my email address jayadevpillai56@gmail.com
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" onClick={HandleClickColor} style={clickColor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Free to use
      </button>
    </h2>
    <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      This Utility is absolutely free to use with no ads. Please use this web application as per your requirements and spread the word to help make this site a popular text modification destination.
      </div>
    </div>
  </div>
</div>


</div>
  )
}
