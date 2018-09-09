import React, { Component }  from 'react';
//import ReactDOM from 'react-dom';
import AccountTR from '../atoms/AccountTR';
import ReferLink from '../atoms/ReferLink';
import ShareTo from '../atoms/ShareTo';
import '../../styles/scss/account.scss';

export default class Account extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        //api
        uName: 'JaneJoe',
        walletAddr: 'jwefwe87…2kwefjefew7yr23ifu',
        uEmail: 'janejoe@email.com',
        bid: 'XXX.xxxx',
        shares: 'XXX',
        referEarnings: 'XXX.xxxx',
        totalEarnings: 'XXX.xxxx',
        withdrawn: 'XXX.xxxx',
        availForWithdraw: 'XXX.xxxx',
        //inside component
        eidtName: false,
        isOpen: false
      };

      this.triggerW = this.triggerW.bind(this);
      this.changeName = this.changeName.bind(this);
    };

    triggerW() {
        return;
    };

    changeName() {
        this.setState(prevState => ({editName: !prevState.editName}));
    }

    render() {
        const {uName, walletAddr, uEmail, bid, shares, referEarnings, totalEarnings, withdrawn, availForWithdraw, editName, isOpen} = this.state;
        return (
            <div>
                <button className='border-0 bg-transparent' type='button' onClick={() => this.setState({isOpen: true})}><i className="far fa-user artx-gradient-text artx-type-et"></i><span className='artx-gradient-text artx-type-et d-none d-lg-inline'> Personal Account</span></button>
                {
                    isOpen
                    ? <div className='artx-account-container position-absolute artx-gradient-outter'>
                        <div className='artx-gradient-inner ap-8'>
                            <button type="button" className="d-block ml-auto artx-icon-btn" aria-label="Close" onClick={() => this.setState({isOpen: false})}>
                                <i className="fas fa-times artx-type-et artx-gradient-text"></i>
                            </button>
                            <div className='mt-2'>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="artxAN" className="artx-type-et text-white artx-yellow-dot">Account Name</label>
                                            { editName
                                            ? <div className="d-flex justify-content-between border-bottom">
                                                <input type="text" className="artx-type-et text-white border-0 w-100" id="artxAN" defaultValue={uName}/>
                                                <button className="artx-btn text-white p-2" type='submit' onClick={this.changeName}>Submit</button>
                                            </div>
                                            : <div className="d-flex justify-content-between border-bottom">
                                                <input type="text" readOnly  className="artx-type-et text-white border-0 w-100" id="artxAN" value={uName}/>
                                                <button className="artx-icon-btn" onClick={this.changeName} aria-label='edit account name' type='button'>
                                                    <i className="far fa-edit artx-type-et artx-gradient-text"></i>
                                                </button>
                                            </div>}
                                    </div>
            
                                    <div className="form-group mt-3">
                                        <label  htmlFor="artxWA" className="artx-type-et text-white">Wallet Address</label>
                                        <div className="border-bottom">
                                            <input type="text" readOnly className="artx-type-et text-white border-0 w-100" id="artxWAd" value={walletAddr}/>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label  htmlFor="artxE" className="artx-type-et text-white artx-yellow-dot">Email</label>
                                        <div className="d-flex justify-content-between border-bottom">
                                            <input type="email" readOnly className="artx-type-et text-white border-0 w-100" id="artxE" value={uEmail}/>
                                            <button className="artx-icon-btn" onClick={this.changeName} aria-label='email address verified' type='button'>
                                                <i className="fas fa-check"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="artxRL" className="artx-type-et text-white">Personal Referral Link</label>
                                        <div className="border-bottom">
                                            <ReferLink link='uadsfafadf' account='true'/>
                                        </div>
                                    </div>
                                </form>
                                <div className='d-flex mt-4'>
                                    <p className='artx-type-et text-white mr-3'>Share to</p>
                                    <ShareTo/>
                                </div>
                                <table className='mt-4'>
                                    <thead className="sr-only">
                                        <tr>
                                            <th>User profile item</th>
                                            <th>User profile content</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <AccountTR label='Bid' content={bid}/>
                                        <AccountTR label='Shares' content={shares}/>
                                        <AccountTR label='Referral' content={referEarnings}/>
                                        <AccountTR label='Total Earnings' content={totalEarnings}/>
                                        <AccountTR label='Withdrawn' content={withdrawn}/>
                                        <AccountTR label='Available for withdraw' content={availForWithdraw}/>
                                    </tbody>
                                </table>
                                <button className='w-100 artx-btn artx-type-et text-white amt-8 py-2' onClick={this.triggerW} type='button'>Withdraw</button>
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div>
        )
    };
};

    