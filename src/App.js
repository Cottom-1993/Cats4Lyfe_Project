import './App.css';
import  Modal  from './Modal'
import { useState, useEffect } from 'react';

// import {faker, animal, cat} from '@faker-js/faker';

const App =() => {
  const [catPics, setCatPics] = useState ([])
  // const catName = faker.animal.cat(catName);
  // const catBreed = faker.animal.cat(catBreed);
  // const catAge = faker.animal.cat(catAge);


  const fetchData = async () => {
    const apiRequest = await fetch ("https://api.thecatapi.com/v1/images/search?limit=10")
    const apiData = await apiRequest.json()
    
    setCatPics(apiData)

    console.log(apiRequest)
    console.log(apiData)
  }

  const [showModal, setshowModal] = useState(false)

  useEffect(() => {
    fetchData()
  }, [] )

  return (
    <div>
    
    {catPics.map((singleCat, index)=>{
      
      return (
        <div key={index}>
          <img key="photos" alt="cat for sale" src={singleCat.url}/>
          <p>{singleCat.id}</p>
          <button className="openModal" onClick={()=>setshowModal(true)}>Add to basket</button>
          

        </div>
      )
    })}

    <div>
   
    </div>
      <div id="ModalBanner">
          {showModal && <Modal showModal={showModal} />}
          </div>
    </div>
  );
}





export default App;





