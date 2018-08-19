import React, { Component }  from 'react';
import '../../styles/scss/play.scss';

export default class Above extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          //api
          diffAppraisal: '43472',
          currentPrice: '23472',
          jackpot: '34059.3423', 
          rewards: '34059.3423'
        };
    };

    render() {
        const jpWidth = {
            width: parseFloat(this.state.jackpot)/(parseFloat(this.state.jackpot) + parseFloat(this.state.rewards)) + '%'
        };
        return (
            <div>
                <div className='text-center mt-5'>
                    <span>Auction is closing in another</span><br/>
                    <span>{this.state.diffAppraisal}ETH</span>
                    <i className="far fa-question-circle"></i>
                </div>
                <div className='d-flex'>
                    <div className='align-self-end'>
                        <div className='d-flex justify-content-between'>
                            <p>Jackpot<br/>{this.state.jackpot}ETH</p>
                            <p className='text-right'>Rewards<br/>{this.state.rewards}ETH</p>
                        </div>
                        <div className='artx-jackpot-percent w-100 border'>
                            <div className='border' style={jpWidth}></div>
                        </div>
                    </div>
                    <div className='align-self-start text-center'>
                        <p className='text-center'>the first blockchain-bases art Genesis is on Auction now</p>
                        <p className='text-center'>{this.state.currentPrice}ETH</p>
                        <button className='btn btn-outline-primary'>Bid</button>
                    </div>
                    <div className='align-self-end'>
                        <p className='text-right'>Lot 001 Genesis<br/>block no.<br/>Genesis is a crowdsourced and decentralized blockchain-based data visualization artwork that evolves in real-time. Your wallet address, bid amount and bid time will serve as data input for the creation of GENESIS.</p>
                    </div>
                </div>
            </div>
        )
    };

};