import { useState, useEffect } from 'react'
import './styles/_main.scss';
import axios from "axios";

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
      const response = await axios.get("http://localhost:8080/api");
      setArray(response.data.fruits);
  }

  useEffect(() => {
      fetchAPI();
  }, [])

  return (
    <>
      <div className="card">
        <h1>Hello World</h1>

        {array.map((fruit, index) => (
          <div key={index}>
            <p>{fruit}</p>
            <br/>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
