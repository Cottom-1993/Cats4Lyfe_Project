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

import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [catPics, setCatPics] = useState([]);

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

  return (
    <div>
     
    {catPics.map((singleCat, index) => {
      console.log(singleCat);
      return (
        <div key={singleCat.id}>
          <img alt="cat for sale" src={singleCat.url} className={`cat-pic-${index}`} />
          <p>{singleCat.id}</p>
        </div>
      );
    })}

    </div>
  );
};

export default App;
