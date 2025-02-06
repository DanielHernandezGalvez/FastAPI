import Reacta, { useState } from 'react'
import Title from '../components/Title'

export default function Esignatureap() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: "10px",
  }
  document.body.style.background = "#eee"

  return (
    <div className='title text-center'>
      <Title text={"Name"} classes={"main-title"} />
      <Title text={"Date"} classes={"subtitle"} />
      <p>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maiores doloribus ab aut
        sunt eaque optio accusantium provident quasi e
        arum repellat debitis consequuntur velit, qua
        e id officia, alias asperiores? Consequatur,
        quos.</p>
      <footer className='d-flex' style={{ justifyContent: "space-around", position: "relative", top: "40vh" }}>
        <input type="date" value={date} style={inputStyle} onChange={handleNamehange} />
        <input type="text" value={name} style={inputStyle} />
      </footer>
    </div>
  )
}
