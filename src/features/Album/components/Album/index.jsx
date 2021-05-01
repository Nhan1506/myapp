import React from 'react';
import './style.scss';
//import PropTypes from 'prop-types';

// Album.propTypes = {
//     album: PropTypes.object.isRequired,
// };

function Album({album}) {
    return (
        <div className='album'>
            <div className="album__thumbnail">
                <img src={album.thumbnailURl} alt={album.name}></img>
            </div>
            <p className="album__name">{album.name}</p>
        </div>
    );
}

export default Album;