import React from 'react'

export default function AnimeCard({ anime}) {
    if(!anime){
        return (
            <h2 style={{color:"red"}}>
                Không có kết quả tìm thấy 
            </h2>
        )
    }
    return (
                
            <article className="anime-card">
            <a href={anime.url} target="_blank">
            <figure>
					<img 
						src={anime.image_url} 
						alt="Anime Image" />
				</figure>
                <h3>{anime.title}</h3>
            </a>
        </article>

    )
}
