import {marked} from 'marked'
import React, {useState} from 'react'
import './app.css'

const initialSate = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:



You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
function App() {
  const [state, setState] = useState({markDown: initialSate})

  function handelChange(e) {
    setState({markDown: e.target.value})
  }
  return (
    <>
     <h1 className='title'>Mark Down project</h1>
    <div className='container'>
    
     <div className='left' >
    
     <textarea id = "editor"value = {state.markDown} onChange ={handelChange}/>
 
      </div>

      <div className='right'>

      <div id="preview" dangerouslySetInnerHTML={{__html:marked(state.markDown) }} /> 
     </div>
     </div>
    </>
  )
}

export default App
