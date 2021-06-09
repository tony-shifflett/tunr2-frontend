import React from 'react'
import SongList from '../components/SongList'
import FavoriteList from '../components/FavoriteList'

const HomePage = (props)=>{
    return (
        <>
            <SongList/>
            <FavoriteList/>
        </>
    )
}

export default HomePage