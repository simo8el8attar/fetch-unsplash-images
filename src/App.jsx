import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import unsplash from './Unsplash';


function App() {
  const [imgs,setImgs] = useState([]);
  const [imgQuery , setImgQuery] = useState(null);
  const [numberOfImgs , setNumberOfImgs] = useState(5);
  const fetchImages = async () => {
    try{
      const response = await unsplash.search.getPhotos(
        {
        query : imgQuery,
        page: 1,
        perPage: numberOfImgs
        }
      );
      const data = response.response;
      console.log(data);
      setImgs(data.results);
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <h1>Search for unslash images</h1>
      <hr />
      
      <input className='input' type="text" onChange={(e)=>{setImgQuery(e.target.value)}}/>
    <p>
      <strong>How many Pictures :</strong>
      <select onChange={(e)=>{setNumberOfImgs(e.target.value)}}>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      </p>
    
      
      <button className='btn btn-primary m-1' onClick={fetchImages}>fetch images</button>
        {imgs.map((i,index)=>(
          <div key={index}>
            <img src={i.urls.small} alt={i.slug} /><br/>
            <strong>{i.slug}</strong>
            </div>))}
      
      </>
  )
}

export default App
