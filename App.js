import { useState, useEffect } from "react";
import './App.css';
import DogList from "./components/DogList"
import DogGallery from "./components/DogGallery"
import Header from './components/Header'

function App() {
  const [dogList, setList] = useState([])
  const [dogImages, setImages] = useState([])

  async function fetchDogs(){
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await response.json()
    setList(data)
  }

  async function fetchImages(breed, number){
    console.log(number)
    if(number === null || number === ''){
      setImages([]);
      return;
    }
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/${number}`)
    const data = await response.json()
    setImages(data)
  }

  useEffect(() =>{
    fetchDogs()
  },[])
  
  console.log(dogImages)

  return (
    <>
      <Header/>
      <div className="Content">
        <DogList data = {dogList.length !== 0 ? Object.keys(dogList.message) : []} func = {fetchImages}/>
        <DogGallery data = {dogImages.length !== 0 ? dogImages.message : []}/>
      </div>
    </>
  );
}

export default App;