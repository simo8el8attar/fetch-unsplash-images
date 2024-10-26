import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Images from './images'
function App() {
  const [imgCounter , setImageCounter] = useState(0);

  const [imgWidth , setImgWidth] = useState('1050');
  const [imgHeight , setImgHeight] = useState('300');

  const imgStyle = {
    width : `${imgWidth}px`,
    height : `${imgHeight}px`
  };
  const nextImg = () =>{
    Images.length - 1 > imgCounter ? setImageCounter(imgCounter + 1) : setImageCounter(0);
    console.log(imgCounter)
  };
  const prevImg = () =>{
    imgCounter > 0 ? setImageCounter(imgCounter - 1) : setImageCounter(Images.length - 1);
  }
  return (
    <>
      <h1>Image Caroussel</h1>
      <hr />
      <div>
        Adjust Image :
        <p>
          <strong>select Width :  </strong>
            <input
              onChange={(e)=>{setImgWidth(e.target.value)}}
             type="text" placeholder={`${imgWidth}px`}/><br/><br/>
         <strong>select Height : </strong> 
              <input
               onChange={(e)=>{setImgHeight(e.target.value)}}
               type="text" placeholder={`${imgHeight}px`} />
        </p>
      </div>
      <div className='container d-flex flex-column'>
        <img style={imgStyle} src={Images[imgCounter]}/>
        <br/>
        <button onClick={nextImg} className='btn btn-primary'>Next</button>
        <br/>
        <button onClick={prevImg} className='btn btn-danger'>Prev</button>
      </div>
    </>
  )
}

export default App
