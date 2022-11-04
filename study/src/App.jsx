import {marked} from 'marked'
import React, {useState} from 'react'
import './app.css'

const initialSate = `


# Welcome
## Enjoy typing
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[FreeCodeCamp](https://learn.freecodecamp.org)

[Google](https://www.google.com "World's Most Popular Search Engine")

### Text Decorations

*italic*

**bold**

***bold and italic***

### Images

![alt text](https://picsum.photos/id/237/400/300 'black dog')

### Blockquote

> To be, or not to be. That is a stupid question.

### Code

\`npm install create-react-app -g\`

\`\`\`
function addTwoNumbers(a, b) {
  return a + b
}
const name = 'Benjamin'
const age = 37
const number = Math.random() * 10
\`\`\`
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
