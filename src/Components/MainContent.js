import React, {useRef, useState} from 'react';
import AnimeCard from './AnimeCard';

export default function MainContent() {
    const [animeList, setAnimeList] = useState([]);
   
    const [search, setSearch] = useState("");

      const resetInputField = () => {
        setAnimeList([]);
      };

      const fecthData = async (query) =>{
        const data = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=15`)
        .then(res => res.json());
           setAnimeList(data.results);
      }

      
        const handleSearch = e => {
            e.preventDefault();
            fecthData(search)

            resetInputField();
        }
    return (
        <main>
            <div className="main-head">
                <form className="search-box" onSubmit={handleSearch}>
                    <input 
                    type="text"
                    placeholder="Search for an anime..."
                    required
                    value={search}
                    onChange={e => setSearch(e.target.value)}/>
                </form>
            </div>
            <div className="anime-list">
                {animeList.map(anime => (
					<AnimeCard
						anime={anime}
						key={anime.mal_id} />
				))}
            </div>
        </main>
    )
}
