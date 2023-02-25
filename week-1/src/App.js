import React, { useState } from 'react'

function App() {
  // const [name,setName] = useState("김지호")
  // const [fruit,setFruit] = useState("")
  // const [userId,setUserId] = useState("")
  // const [userpassword,setUserPassword] = useState("")
  const [count,setCount]=useState(0)
  function phandler(){
    return setCount(count+1)
  }
  function mhandler(){
    return setCount(count-1)
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={phandler}>+1</button>
      <button onClick={mhandler}>-1</button>
    </div>
    // <div>
    //   아이디:{""}
    //   <input type="text" value={userId} onChange={function(event){
    //     setUserId(event.target.value);
    //   }}></input>
    //   <br/>
    //   비밀번호:{""}
    //   <input type="password" value={userpassword} onChange={function(event){
    //     setUserPassword(event.target.value)}}></input>
    //   <br/>
    //   <button onClick={() =>{
    //     alert(`니 아이디${userId}, 니 비밀번호${userpassword}`)
    //     setUserId("")
    //     setUserPassword("")
    //   }}>로그인</button>
    // </div>



    // <div>
    // {name}
    // <br/>
    // <button onClick={function(){setName("양인서");}}>클릭!</button>
    
    // 과일:{" "}
    // <input
    //   value={fruit}
    //   onChange = {function(event){
    //     setFruit(event.target.value);
    //   }}
    //   />
    //   <br></br>
    //   {fruit}


    // </div>
  )
}



export default App 