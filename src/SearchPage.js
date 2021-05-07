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
            views="399"
            subs="1.1K"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime dolores temporibus similique perferendis aut rem possimus vel quidem iure?"
            timestamp="59 seconds ago"
            channel="Ali Abbasov"
            title="Learning Web Development"
            image="https://i.ytimg.com/vi/NT299zIk2JY/mqdefault.jpg" />

            <VideoRow
            views="399"
            subs="1.1K"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime dolores temporibus similique perferendis aut rem possimus vel quidem iure?"
            timestamp="59 seconds ago"
            channel="Ali Abbasov"
            title="Learning Web Development"
            image="https://i.ytimg.com/vi/NT299zIk2JY/mqdefault.jpg" />

            <VideoRow
            views="399"
            subs="1.1K"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime dolores temporibus similique perferendis aut rem possimus vel quidem iure?"
            timestamp="59 seconds ago"
            channel="Ali Abbasov"
            title="Learning Web Development"
            image="https://i.ytimg.com/vi/NT299zIk2JY/mqdefault.jpg" />

            <VideoRow
            views="399"
            subs="1.1K"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime dolores temporibus similique perferendis aut rem possimus vel quidem iure?"
            timestamp="59 seconds ago"
            channel="Ali Abbasov"
            title="Learning Web Development"
            image="https://i.ytimg.com/vi/NT299zIk2JY/mqdefault.jpg" />

            <VideoRow
            views="399"
            subs="1.1K"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime dolores temporibus similique perferendis aut rem possimus vel quidem iure?"
            timestamp="59 seconds ago"
            channel="Ali Abbasov"
            title="Learning Web Development"
            image="https://i.ytimg.com/vi/NT299zIk2JY/mqdefault.jpg" />
        </div>
    )
}

export default SearchPage
