import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [msg, setMsg] = useState(undefined)
  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(response => {
        setMsg(response.data)
      })
      .catch(error => {
        console.error("There was an error fetching the notes!", error);
      });
  }, []);

  return (
    <div>
      <h1>Life Ledger</h1>
      {msg == undefined ? <p>Data Not recevied</p> : <p>{msg.msg}</p>}
    </div>
  );
}

export default App;
