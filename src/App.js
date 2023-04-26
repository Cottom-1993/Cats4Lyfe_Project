import './App.css';
import { useState, useEffect } from 'react';


const App =() => {
  const [catPics, setCatPics] = useState ([])

  const fetchData = async () => {
    const apiRequest = await fetch ("https://api.thecatapi.com/v1/images/search?limit=10")
    const apiData = await apiRequest.json()
    
    setCatPics(apiData)

    console.log(apiRequest)
    console.log(apiData)
  }

  useEffect(() => {
    fetchData()
  }, [] )

  return (
    <div>
     
    {catPics.map((singleCat)=>{
      console.log(singleCat)
      return (
        <div>
          <img key="photos" alt="cat for sale" src={singleCat.url}/>
          <p>{singleCat.id}</p>
        </div>
      )
    })}

    </div>
  );
}

export default App;




