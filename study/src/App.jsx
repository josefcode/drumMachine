
import React, {useState} from 'react'
import './app.css'
import DrumpPad from './components/DrumpPad'

function App() {

  const [textOutput, setTextOutput] = useState('');

  const keyboards = [
     {
      letter: 'Q',
      id : 'Heater-1',
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
     },
     {
      letter: 'W',
      id : 'Heater-2',
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
     },
     {
      letter: 'E',
      id : 'Heater-3',
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
     },
     {
      letter: 'A',
      id : 'Heater-4',
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
     },
     {
      letter: 'S',
      id : 'Clap',
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
     },
     {
      letter: 'D',
      id : 'Open-HH',
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
     },
     {
      letter: 'Z',
      id : "Kick-n'-Hat",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
     },
     {
      letter: 'X',
      id : 'Kick',
      audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
     },
     {
      letter: 'C',
      id : 'Closed-HH',
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
     },

  ]

  function handelClick(e) {
      const audio = e.target.firstElementChild
      const discription = audio.parentElement

      setTextOutput(discription.id)
      audio.play()
      
    }

  function handleKeyDown(e) {
      const id = e.key.toUpperCase()
      const audio = document.getElementById(id);
       
      if(audio){
        const discription = audio.parentElement
        setTextOutput(discription.id)

        discription.classList.add("active")
        audio.play()
    
        audio.addEventListener('ended', () => {
        discription.classList.remove('active')

          })
        }
        else {
          null
        }
      }
 
  return (
    <>
    <h1 className='title'>Drum Machine Project</h1>
      <div id="drum-machine" className="container">
        <div className = "pad-bank">
         <div id="display">
          {
            keyboards.map(item=> <DrumpPad key = {item.id} onclick = {handelClick} id = {item.id} keyboard={item.letter} audio = {item.audio} onkeydown = {handleKeyDown} 
            />)
          }
          <p id = "display" className='display'>{textOutput}&nbsp;</p>
         </div>
         </div>
      </div>
    </>
  )
}

export default App
