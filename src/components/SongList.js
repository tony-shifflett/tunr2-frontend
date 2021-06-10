import React from 'react'
import Song from './Song'

const SongList = (props)=>{
    //destructure songs from props
    const { songs } = props

    const loaded = ()=>(
        <div>
            {songs.map((song)=>(
                <article className ="song" key={song.id}>
                    <h2 >{song.title}</h2>
                    <h3>{song.time}</h3>
                    <h3>{song.artist}</h3>
                    <h3>{song.favorite}</h3>
                </article>
            ))}
        </div>
    )

    // loading() sends back a blank song template if no songs have been added
     const loading = ()=>(
        <div>
            <article>
                <h2>Song Title</h2>
                <h3>Song PlayTime</h3>
                <h3>Artist</h3>
            </article>
        </div>
    )



    return songs.length > 0 ? loaded() : loading()
}

export default SongList