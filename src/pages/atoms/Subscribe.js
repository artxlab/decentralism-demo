import React, { Component }  from 'react';
import '../../styles/scss/subscribe.scss';

export default class Subscribe extends Component {    
    constructor(props) {
    super(props)

    this.state = {
      subEmail: ''
    };
  };

    handleSub() {
        this.setState({subEmail: 'sarahvc@qq.com'});
    };
    render () {
        return (
            <form className='artx-subscribe-form mx-auto'>
                <div className="form-group text-center">
                    <label className='artx-type-et artx-gradient-text mb-4' htmlFor='subscribeEmail'>Subcribe to the ARTX email list to get updates on Decentralism art auctions and ARTX airdrop!</label>
                    <div className='artx-subscribe-input d-flex justify-content-between mx-auto'>
                        <input className='py-3 apl-8 border-0' type='email' id='subscribeEmail' placeholder='Email'/>
                        <button className='text-white font-weight-bold border-0 h-100 py-3 px-4' type="submit" onClick={this.handleSub}>JOIN NOW</button>
                    </div>
                </div>
            </form>
        )
    };
};