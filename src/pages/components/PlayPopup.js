import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/scss/popup.scss';

const PlayPopup = (close) => (
    <div className='art-play-container position-absolute mx-auto artx-gradient-outter'>
        <div className='artx-gradient-inner ap-9'>
            <p className='artx-type-st text-white'>ARTX AI will create <i>Genesis</i>, a digital artwork, using blockchain-based transaction data from the auction. <i>Genesis</i> is probably the most expensive and important artwork created on blockchain! Don't miss your chance to be a part of history!</p>
            <button className='d-block mx-auto btn btn-link text-warning artx-type-et' onClick={close}>Play Now</button>
        </div> 
    </div>
);

export default PlayPopup;

PlayPopup.propTypes = {
    close: PropTypes.func.isRequired
}