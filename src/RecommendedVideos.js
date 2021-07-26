import React from 'react'
import VideoCard from './VideoCard';
import './RecommendedVideos.css'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title = "React Native vs Flutter. Which Framework to chose?"
                    views = "1.9K Views"
                    timestamp = "4 months ago"
                    channelImage = "https://yt3.ggpht.com/ytc/AKedOLSGZ2Aw2IKcwkvKBDOXavh89jJLj1KpZ5GoNipz=s68-c-k-c0x00ffffff-no-rj"
                    channel = "ForceBolt"
                    image = "https://i.ytimg.com/vi/VU8Yv6LhDlY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoB8lRkfHuL4eSKME7fSwKxpbx-g"
                    length = "5:08"
                />
                <VideoCard
                    title = "Learn JavaScript Array Reduce in 10 Minutes"
                    views = "49K Views"
                    timestamp = "1 week ago"
                    channelImage = "https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s68-c-k-c0x00ffffff-no-rj"
                    channel = "Web Dev Simplified"                    
                    image = "https://i.ytimg.com/vi/s1XVfm5mIuU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBn76N7faH4nz-3XVdANW0Qe0Nw4g"
                    verified
                    length = "10:22"
                />
                <VideoCard
                    title = "Why 50% of Canadians Live South of This Line"
                    views = "1.3M Views"
                    timestamp = "2 days ago"
                    channelImage = "https://yt3.ggpht.com/ytc/AKedOLSp0-wTRfOTEZwjNemKUXs_eFtKPCnnIfsWBqGhVg=s68-c-k-c0x00ffffff-no-rj"
                    channel = "RealLifeLore"
                    image = "https://i.ytimg.com/vi/DFJAgb7dn78/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnxup-56275Eqw88SYITymLrYLyw"
                    length = "9:57"
                />
                <VideoCard
                    title = "Career Advice For Android Developers // App Developer Career Paths"
                    views = "22K Views"
                    timestamp = "1 year ago"
                    channelImage = "https://yt3.ggpht.com/ytc/AKedOLQrIcidfyJvj17XQVZpxWpsCmrTYKUOQ8qdT5fXNg=s68-c-k-c0x00ffffff-no-rj"
                    channel = "goobar"
                    image = "https://i.ytimg.com/vi/zyR2qVn4X6A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwQP3f5mSrjSFQxbey3TCZVGimeA"
                    length = "23:15"
                />
                <VideoCard
                    title = "10 modern layouts in 1 line of CSS"
                    views = "948K Views"
                    timestamp = "1 year ago"
                    channelImage = "https://yt3.ggpht.com/ytc/AKedOLSTp0L8piELVBHBTBc-wWa5t_KG5RKanHXm52hj8w=s68-c-k-c0x00ffffff-no-rj"
                    channel = "Google Chrome Developers"
                    image = "https://i.ytimg.com/vi/qm0IfG1GyZU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCS5_hdRXeP4zlEhNSxxutf5sUhcA"                    
                    verified
                    length = "21:39"
                />
                <VideoCard
                    title = "Junior Vs Senior Code - How To Write Better Code"
                    views = "758K Views"
                    timestamp = "1 year ago"
                    channelImage = "https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s68-c-k-c0x00ffffff-no-rj"
                    channel = "Web Dev Simplified"
                    image = "https://i.ytimg.com/vi/g2nMKzhkvxw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu5Jwcxmp6BP2OYQAsAcRP42L5Aw"
                    verified
                    length = "22:13"
                />
                <VideoCard
                    title = "React explained for Vue developers in 7 mins"
                    views = "1.1K Views"
                    timestamp = "3 months ago"
                    channelImage = "https://yt3.ggpht.com/ytc/AKedOLQXQd1OKX4yHMZlnoZbna5iGKyz67nnDnU8Ji8Gsg=s68-c-k-c0x00ffffff-no-rj"
                    channel = "Coding with Justin"
                    image = "https://i.ytimg.com/vi/oipl-RXyLTw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQ5Gym-4Qvy9jb0awhZVeYRIa6tA"
                    length = "7:48"
                />
                <VideoCard
                    title = "Git Branch Explained in 1 Minute #Shorts"
                    views = "590 Views"
                    timestamp = "14 hours ago"
                    channelImage = "https://yt3.ggpht.com/ytc/AKedOLT-qv-2IWqlEEVuJO1niIU0blPUZG2GQncKH4JL=s68-c-k-c0x00ffffff-no-rj"
                    channel = "Keep On Coding"
                    image = "https://i.ytimg.com/vi/YyFrdoD-Wjk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOOOvXeiPLj1rucbg26LoS-knwEQ"
                    verified
                    length = "0:54"
                />
                <VideoCard
                    title = "Learn C# Scripting for Unity in 15 Minutes"
                    views = "364K Views"
                    timestamp = "1 year ago"
                    channelImage = "https://yt3.ggpht.com/ytc/AKedOLTSyLlaLczAVOCe4PTUU45X-q5GOrd8D0xhTVdeRQ=s68-c-k-c0x00ffffff-no-rj"
                    channel = "Charger Games"
                    image = "https://i.ytimg.com/vi/9tMvzrqBUP8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBMYX8EEynFjgymkIub0DEuQF0CA"
                    length = "15:15"
                />
                <VideoCard
                    title = "Animating Vue Router Transitions in Vue 3"
                    views = "4.9K Views"
                    timestamp = "6 months ago"
                    channelImage = "https://yt3.ggpht.com/ytc/AKedOLSmyA5MEleqBI9n8H7Hi0DTLDotjmdgEqtA6Klw=s68-c-k-c0x00ffffff-no-rj"
                    channel = "LearnVue"
                    image = "https://i.ytimg.com/vi/L77Uq93XXzk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYzVp3f-LGakR4yDLEb9xQc6qrvw"
                    length = "12:08"
                />
            </div>
        </div>
    )
}

export default RecommendedVideos
