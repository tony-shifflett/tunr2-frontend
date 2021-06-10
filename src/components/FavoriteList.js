import React from 'react'
import Song from './Song'

const FavoriteSongs = (props) => {
    //deconstruct songs from props
    const { favoriteSongs } = props;
  
      
  
    const loaded = () => (
      <div style={{ textAlign: "center" }}>
        <h1>Favorite Songs</h1>
        {favoriteSongs.map((song) => (
          <article key={song._id}>
            <p>Title: {song.title}</p>
            <p>Artist: {song.artist}</p>
            <p>Time: {song.time}</p>
          </article>
        ))}
      </div>
    );
  
    const loading = () => <h1>No favorites yet.</h1>;
  
    return favoriteSongs.length > 0 ? loaded() : loading();
  
  };
  
  
  export default FavoriteSongs;