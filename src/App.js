import './App.css';
import { useState, useEffect } from 'react';

const App =() => {
  const [INSERT CODE HERE, INSERT CODE HERE] = useState ([])

  const fetchData = async () => {
    const apiRequest = await fetch (" ")  /*INSERT API URL IN THE BRACKETS!*/ 
    const apiData = await apiRequest.json()
    
    setpokeChar(apiData)

    console.log(apiRequest)
    console.log(apiData)
  }

  useEffect(() => {
    fetchData()
  }, [] )

  return (
    <div>
     
    {INSERT.map((INSERT CODE)=>{
      
      return (
        <div>
        
        </div>
      )
    })}

    </div>
  );
}

export default App;




