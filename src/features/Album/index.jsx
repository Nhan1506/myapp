import React from 'react';
import AlbumList from './components/AlbumList';
//import PropTypes from 'prop-types';

//AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc hoa thịnh hành',
            thumbnailURl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/1/0/d/810df572315053bac8f837744f6cd375.jpg',
        },
        {
            id: 2,
            name: 'Nhạc hoa thịnh hành 2',
            thumbnailURl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/1/0/d/810df572315053bac8f837744f6cd375.jpg',
        },
        {
            id: 3,
            name: 'Nhạc hoa thịnh hành 3',
            thumbnailURl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/1/0/d/810df572315053bac8f837744f6cd375.jpg',
        },
    ]; 
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;