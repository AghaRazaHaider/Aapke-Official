import React from 'react'
import './videos.css'
import charsibhoot from '../../assets/charsi-bhoot.jpg'
import localcid from '../../assets/local-cid.jpg'
import firstvlog from '../../assets/fisrt-vlog.jpg'

const Videos = () => {
    const videosdata = [
        {
            image: charsibhoot,
            title: "Charsi Bhooot | Part # 01 | Funny & Horror Short Film",
        },
        {
            image: localcid,
            title: "Local CID | Part # 01 | Desi Crime Investigation Comedy (Local CID Part 1 )",
        },
        {
            image: firstvlog,
            title: "MERA FIRST VLOG EXPERIENCE at Gulshan Eating Joint!",
        }
    ]
    return (
        <div>
            <h2>Featured Videos</h2>
            <div className='videos-list'>
                {videosdata.map((video, index) => (
                    <div className="videos-card">
                    <div className='inner-map'>
                        <img src={video.image} alt="thumbnail" />
                        <h3>{video.title}</h3>
                        <div className='inner-map-a-div'>
                        <a href="#" target='_blank' rel='noopenernorefferer'>Watch Now</a>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Videos
