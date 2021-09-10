import React, {useState,useEffect, useRef } from 'react'
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Sidebar from './Components/Sidebar';
import './Styles/main.css';


function App() {
 
  const [topAnime, setTopAnime] = useState([]);
  const search = useRef("");

  const getToTopAnime = async () =>{
      const data = await  fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`).then(res => res.json());
      setTopAnime(data.top.slice(0,5));
  }

  

  useEffect(()=>{
    getToTopAnime();
  }, [])


  return (
    <div>
      <Header />
      <div className="content-wrap">
          <Sidebar topAnime={topAnime}/>
          <MainContent 
          />
      </div>
    </div>
  );
}

export default App;
