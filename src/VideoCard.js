import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './VideoCard.css';

function VideoCard({ image, title, channel, views, timestamp, channelImage, verified, length }) {
    return (
        <div className="videoCard">
            <div style={{ position: 'relative' }}>
                <img className="videoCard__thumbnail" src={image} alt="" />
                <div style={{ position: 'absolute', bottom: '10px', right: '20px', zIndex: '3', background: 'black', color: 'white', padding: 2, paddingTop: 1, paddingBottom: 1, borderRadius: '2px' }}>
                    <p style={{ fontSize: '0.8rem' }}>{ length }</p>
                </div>
            </div>
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar" alt={channel} src={channelImage ? channelImage : channel} />
                <div className="videoCard__text">
                    <p style={{ color: 'black', fontSize: '1.05rem', fontWeight: '500' }}>{title}</p>
                    <p>{channel} {verified && <CheckCircleIcon style={{ fontSize: '1rem' }} />} </p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard
