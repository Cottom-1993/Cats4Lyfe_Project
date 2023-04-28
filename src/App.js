// import './App.css';
// import { useState, useEffect } from 'react';


// const App =() => {
//   const [catPics, setCatPics] = useState ([])

//   const fetchData = async () => {
//     const apiRequest = await fetch ("https://api.thecatapi.com/v1/images/search?limit=20&api_key=enlRzO8WCB2SONijKb8GfoS6ehYsdi7v0g6QAgCpIvb8fPEybmyOPDHeK9704j0t")
//     const apiData = await apiRequest.json()
    
//     setCatPics(apiData)

//     console.log(apiRequest)
//     console.log(apiData)
//   }

//   useEffect(() => {
//     fetchData()
//   }, [] )

//   return (
//     <div>
     
//     {catPics.map((singleCat)=>{
//       console.log(singleCat)
//       return (
//         <div>
//           <img key="photos" alt="cat for sale" src={singleCat.url}/>
//           <p>{singleCat.id}</p>
//         </div>
//       )
//     })}

//     </div>
//   );
// }

// export default App;


// 2nd amendment with 10 images being stored!-------------------------------------------------------------------------------------

// import './App.css';
// import { useState, useEffect } from 'react';

// const App = () => {
//   const [catPics, setCatPics] = useState([]);

//   const fetchData = async () => {
//     const apiRequest = await fetch ("https://api.thecatapi.com/v1/images/search?limit=10&api_key=enlRzO8WCB2SONijKb8GfoS6ehYsdi7v0g6QAgCpIvb8fPEybmyOPDHeK9704j0t");
//     const apiData = await apiRequest.json();
    
//     // Save the fetched cat images to local storage
//     localStorage.setItem('catPics', JSON.stringify(apiData));
    
//     setCatPics(apiData);

//     console.log(apiData);
//   };

//   useEffect(() => {
//     // Check if the cat images exist in local storage
//     const localCatPics = localStorage.getItem('catPics');

//     if (localCatPics) {
//       setCatPics(JSON.parse(localCatPics));
//     } else {
//       fetchData();
//     }
//   }, [] );

//   return (
//     <div>
     
//     {catPics.map((singleCat) => {
//       console.log(singleCat);
//       return (
//         <div key={singleCat.id}>
//           <img alt="cat for sale" src={singleCat.url} />
//           <p>{singleCat.id}</p>
//         </div>
//       );
//     })}

//     </div>
//   );
// };

// export default App;



/*-------------- NEWEST VERSION BELOW-------------*/

import './App.css';
import  Modal  from './Modal';
import { useState, useEffect } from 'react';
import Cats4lifeLogo from './Cats4lifeLogo.png'
import {faker, animal, cat} from '@faker-js/faker';



 
  // const catName = faker.animal.cat(catName);
  // const catBreed = faker.animal.cat(catBreed);
  // const catAge = faker.animal.cat(catAge);


const App = () => {
const [catPics, setCatPics] = useState([]);
const [showModal, setshowModal] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);

const catName = faker.name.fullName();
const catBreed = faker.animal.cat();
const catSex = faker.name.sex();
const catBirthdate = faker.commerce.price(1, 9, 0)
const catPrice = faker.commerce.price(350, 1000, 0, '£');
console.log(catName, catBreed, catSex, catBirthdate, catPrice);

const fetchData = async () => {
  const apiRequest = await fetch ("https://api.thecatapi.com/v1/images/search?limit=10&api_key=enlRzO8WCB2SONijKb8GfoS6ehYsdi7v0g6QAgCpIvb8fPEybmyOPDHeK9704j0t");
  const apiData = await apiRequest.json();

  

     // Save the fetched cat images to local storage
    localStorage.setItem('catPics', JSON.stringify(apiData));
    
    setCatPics(apiData);

    console.log(apiData);
  };

  useEffect(() => {
    // Check if the cat images exist in local storage
    const localCatPics = localStorage.getItem('catPics');

    if (localCatPics) {
      setCatPics(JSON.parse(localCatPics));
    } else {
      fetchData();
    }
  }, [] );

  // the below code is what actions the corousel system to allow you to use arrows to go forward and back on the images
  const carouselScrollRight = () => {
    if (currentIndex === catPics.length-1){
      setCurrentIndex(0)
    }else{
      setCurrentIndex(currentIndex +1)
    }
  }

  const carouselScrollLeft = () => {
    if (currentIndex === 0){
      setCurrentIndex(catPics.length-1)
    }else{
      setCurrentIndex(currentIndex -1)
    }
  }

  return (
    <div>
      <div>
          <h1 id='cats4lifeheader'>Cats4Life</h1>
       </div>

       <div>
          <img src={Cats4lifeLogo}></img>
        </div>

       <div id='catsection'>
        <div id="catContainer">
          {catPics.map((singleCat, index) => {
            console.log(singleCat);
            return (
              <div className='catItem' key={singleCat.id} style={{transform:`translateX(-${currentIndex * 100}%)`}}>
                <img alt="cat for sale" src={singleCat.url} className={`cat-pic-${index}`} />
                <p>{singleCat.id}</p>
                <p>Name: {catName}</p>
                <p>Breed: {catBreed}</p>
                <p>Gender: {catSex}</p>
                <p> Age: {catBirthdate}</p>
                <p>Price: {catPrice}</p>
                <button className="openModal" onClick={()=>setshowModal(true)}>Add to basket</button>
              </div>
            );
          })}
        </div>
      </div>
      <div id='buttonarrow'>

      <button onClick={carouselScrollRight}> &#8594; </button>
      <button onClick={carouselScrollLeft}> &#8592; </button>
      </div>
      <div id="ModalBanner">
          {showModal && <Modal showModal={showModal} />}
      </div>
    </div>
  );
};




export default App;




