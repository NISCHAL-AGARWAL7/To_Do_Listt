import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import Body from './Components/body';
function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    if (localStorage.getItem("myMgs") != null) {
      setMessages(JSON.parse(localStorage.getItem("myMgs")))
    }
  }, [])
  return (
    <>
      <Header title="TO DO LIST" />
      <div className='d-flex gap-2 mt-2'>
        <input id="txtMessage" type="text" className='form-control' placeholder='Enter Your Routine...' onKeyPress={e => {
          if (e.key === "Enter") {
            let sub = document.querySelector("#kro");
            let txtMessage = document.querySelector("#txtMessage");
            let arr = [...messages];
            if (txtMessage.value != null && txtMessage.value.trim() !== "") {
              arr.push(txtMessage.value.trim());
              setMessages(arr);
            }
            localStorage.setItem("myMgs", JSON.stringify(arr));
          }
        }} />
        <button id="kro" className='btn btn-primary' onClick={e => {
          let sub = document.querySelector("#kro");
          let txtMessage = document.querySelector("#txtMessage");
          let arr = [...messages];
         if (txtMessage.value != null && txtMessage.value.trim() !== "") {
              arr.push(txtMessage.value.trim());
              setMessages(arr);
            }
          localStorage.setItem("myMgs", JSON.stringify(arr));
        }}>Submit</button>
      </div>
      {
        messages.map((message, ind) => <Body msg={message} index={ind} setMessages={setMessages} />)
      }
    </>

  )
}
export default App
