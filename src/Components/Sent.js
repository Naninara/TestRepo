import React, { useState } from 'react'



function Sent() {
  function changeFun(e) {
    setInfo({...info,[e.target.name]:e.target.value});
    console.log(info)
}
  const [info,setInfo] = useState({"name":"","age":0});
  return (
    <form>
      <label>Name </label>
      <input type='text' value={info.name} name='name' onChange={changeFun}></input>
      <br></br>
      <label>Age </label>
      <input type='text' value={info.age} name='age' onChange={changeFun}></input>
    </form>
  )
}

export default Sent