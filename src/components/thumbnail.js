import React from 'react';

const Thumbnail = props => {
    return props.list.map(
        (src, index) => 
            <img 
                src={src} 
                onClick={() => props.onThumbnailClick(index)} 
                className={`thumbnail ${index == props.selectedIndex && 'selected'}`} 
                key={index}
            />
        )
}

export default Thumbnail;