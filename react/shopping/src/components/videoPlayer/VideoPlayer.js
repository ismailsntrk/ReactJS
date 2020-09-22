import React from 'react'
import ReactPlayer from 'react-player'
import './VideoPlayer.css'

export default function VideoPlayer() {
    return (
        <div className="video-div">
            <ReactPlayer id="video" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true}/>
        </div>
    )
}
