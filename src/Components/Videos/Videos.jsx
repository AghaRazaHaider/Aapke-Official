import React from 'react'
import './videos.css'
import charsibhoot from '../../assets/charsi-bhoot.jpg'
import localcid from '../../assets/local-cid.jpg'
import firstvlog from '../../assets/fisrt-vlog.jpg'
import { FaArrowRight } from "react-icons/fa";

const Videos = () => {
    const videosdata = [
        {
            image: charsibhoot,
            title: "Charsi Bhooot | Part # 01 | Funny & Horror Short Film",
            desc:"Tayyār ho jao ek aise bhoot se milne ke liye jo darata bhi hai aur hasaata bhi! 😂👻 Dekhiye Charsi Bhoot ki masti bhari horror kahani – jisme darr bhi hai aur full comedy bhi! Kya aap iske fun se bach paayenge?",
            url:"https://www.youtube.com/watch?v=GNoPKMoXjas"
        },
        {
            image: localcid,
            title: "Local CID | Part # 01 | Desi Crime Investigation Comedy (Local CID Part 1 )",
            desc:"Crime scene tayyar hai... lekin investigation karein ge Local CID! 🕵️‍♂️🤣 Dekhiye desi style mein crime solve karne wali ek ultra-funny team ki kahani – jahan logic kam aur comedy zyada hoti hai! Kya yeh case solve hoga ya khud hi ek mystery ban jayega?",
            url:"https://www.youtube.com/watch?v=rYC0C-kaSgA"   
        },
        {
            image: firstvlog,
            title: "MERA FIRST VLOG EXPERIENCE at Gulshan Eating Joint!",
            desc:"Mera pehla vlog, aur wo bhi Gulshan ke mashhoor Eating Joint par! 🍔🎥 Mazedar khanay, chill vibes aur thodi si awkwardness – sab kuch hai is vlog mein! Agar aap food aur fun dono pasand karte hain, to yeh vlog aapke liye hi hai!",
            url:"https://www.youtube.com/watch?v=_ZlNdm4N4Qc"
        }
    ]
    return (
        <div>
            <h1>Featured Videos</h1>
            <div className='videos-list'>
                {videosdata.map((video, index) => (
                    <div className="videos-card">
                    <div className='inner-map'>
                        <img src={video.image} alt="thumbnail" />
                        <h3>{video.title}</h3>
                        <p>{video.desc}</p>
                        <div className='inner-map-a-div'>
                        <a href={video.url} target='_blank' rel='noopenernorefferer'>Watch Now <FaArrowRight /></a>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
         </div>
    )
}

export default Videos
