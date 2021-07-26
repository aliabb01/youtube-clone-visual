import React from 'react';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css'
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>                
            </div>
            <hr />

            <ChannelRow
            image
            channel="Ali Abbasov"
            verified
            subs="1.1K"
            noOfVideos={10}
            description="Channel of Ali Abbasov. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores reiciendis corrupti maxime, impedit sunt nesciunt error minima similique mollitia!"
            />

            <hr />

            <VideoRow
                views="109K"
                subs="201K"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime dolores temporibus similique perferendis aut rem possimus vel quidem iure?"
                timestamp="1 week ago"
                channel="John Smith"
                title="React Explained for Vue Developers"
                image="https://i.ytimg.com/vi/oipl-RXyLTw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQ5Gym-4Qvy9jb0awhZVeYRIa6tA" 
            />

            <VideoRow
            views="399"
            subs="1.1K"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime dolores temporibus similique perferendis aut rem possimus vel quidem iure?"
            timestamp="59 seconds ago"
            channel="John Smith"
            title="Learn JavaScript Array Reduce in 10 Minutes"
            image="https://i.ytimg.com/vi/s1XVfm5mIuU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBn76N7faH4nz-3XVdANW0Qe0Nw4g" />

            <VideoRow
            views="15K"
            subs="10K"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime dolores temporibus similique perferendis aut rem possimus vel quidem iure?"
            timestamp="2 weeks ago"
            channel="John Smith"
            title="Career Advice For Android Developers // App Developer Career Paths"
            image="https://i.ytimg.com/vi/zyR2qVn4X6A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwQP3f5mSrjSFQxbey3TCZVGimeA" />

            <VideoRow
            views="1.3M"
            subs="2.8M"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime dolores temporibus similique perferendis aut rem possimus vel quidem iure?"
            timestamp="5 days ago"
            channel="RealLifeLore"
            title="Why 50% of Canadians Live South of This Line"
            image="https://i.ytimg.com/vi/DFJAgb7dn78/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnxup-56275Eqw88SYITymLrYLyw" />

            <VideoRow
            views="1.9K Views"
            subs="1.1K"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime dolores temporibus similique perferendis aut rem possimus vel quidem iure?"
            timestamp="4 months ago"
            channel="John Smith"
            title="React Native vs Flutter. Which Framework to chose?"
            image="https://i.ytimg.com/vi/VU8Yv6LhDlY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoB8lRkfHuL4eSKME7fSwKxpbx-g" />
        </div>
    )
}

export default SearchPage
