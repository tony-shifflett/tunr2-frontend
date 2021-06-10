import React, {useState, useEffect} from 'react'
import SongList from '../components/SongList'
import FavoriteList from '../components/FavoriteList'

const HomePage = (props)=>{
      //BACKEND URL 
        const url = "https://tuner-playlist.herokuapp.com/"

        //empty song
        const emptySong = {
            title:"",
            artist:"",
            time:"",
            favorite: false
        }

        //instances of state to handle song lists
        
        const [songs, setSongs] = useState([emptySong ])
        const [favoriteSongs, setFavoriteSongs] = useState([])

        // getSongs function 
        const getSongs = () => { 
            fetch(url + '/songs/')
            .then((response) => response.json())
            .then((data) => setSongs(data))
            }
        
        //get all songs on screen load
        useEffect(()=>{
            getSongs()
        },[])

    return (
        <>
            <SongList  
             favoriteSongs={favoriteSongs}
             setFavoriteSongs={setFavoriteSongs} 
             songs={songs}/>
             
            <FavoriteList/>
        </>
    )
}

export default HomePage