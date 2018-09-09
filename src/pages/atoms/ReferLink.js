import React from 'react';
import PropTypes from 'prop-types';

const ReferLink = ({link, account}) => {
    const baseUrl = 'http://decentralism.io/';
    const subClass = account === 'true' ? 'artx-refer-account' : 'artx-refer-popup';
    return (
        <div className={subClass}>
            <input type='text' readOnly 
            className={
                account
                ? 'text-white artx-type-et border-0'
                : 'text-white artx-type-st'
            } 
            id='artxRL' value={`${baseUrl}${link}`}
            />
            {
                account
                ? <button className="artx-icon-btn text-white"><i className="far fa-copy artx-type-et artx-gradient-text"></i></button>
                : <button className="artx-type-st artx-btn py-1 px-2 text-white mx-4">Copy</button>
            }
        </div>
    )
};

export default ReferLink;

ReferLink.propTypes = {
    link: PropTypes.string.isRequired
}