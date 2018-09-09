import React from 'react';
import Quote from './atoms/Quote';
import Subscribe from './atoms/Subscribe';
import Footer from './atoms/Footer';
import studio from '../styles/assets/artxstudio.png';
import creating from '../styles/assets/creatingasmining.png';

const About = () => (
    <div>
        <div>
            <img src={studio} className='amt-18 img-fluid' alt='ARTX LAB'/>
            <div className='container mt-4'>
                <p className='artx-type-et text-center text-white'>A Decentralized Art Ecosystem: Blockchain-based Protocol & dApps</p>
                <p className='artx-type-et text-white text-center amt-18'>ARTX is a protocol for a decentralized art ecosystem based on blockchain. The protocol is intended to serve as an open standard and common infrastructure, driving interoperability among decentralized applications (dApps) that incorporate art tokenization, exchange and provenance mechanisms, which brings transparency, liquidity, low friction and access to a traditionally exclusive field.</p>
            </div>
            <img className='amt-18 img-fluid' src={creating} alt='Creating as mining'/>
            <div className='container amt-18'>
                <p className='text-right text-white artx-type-ths'>Proof-of-creativity</p>
                <p className='text-right text-white artx-type-et mb-1'>In the past, the value of art was based on the<br/>CONSENSUS OF A SELECT FEW</p>
                <p className='text-right text-white artx-type-et'>In the future, the value of art is based on the<br/>CONSENSUS OF ALL</p>
                <div className='artx-type-sourcecode'>
                    <p className='mt-5 mb-3 artx-type-et artx-code-green'>{`<html>`}</p>
                    <p className='apl-16 mb-0 artx-type-et artx-code-green'>{`<head>`}</p>
                    <p className='apl-32 mb-0 artx-type-et'><span className='artx-code-green'>{`<title>`}</span><span className='text-white'>What in the world is “Decentralism”?</span><span className='artx-code-green'>{`</title>`}</span></p>
                    <p className='apl-16 mb-3 artx-type-et artx-code-green'>{`</head>`}</p>
                    <p className='mb-0 artx-type-et artx-code-green'>{`<body>`}</p>
                    <p className='apl-16 mb-0 artx-type-et artx-code-green'>{`<article>`}</p>
                    <p className='apl-32 mb-0 artx-type-et artx-code-green'>{`<header>`}</p>
                    <p className='apl-48 mb-0 artx-type-et artx-code-green'>
                        <span className='artx-code-green'>{`<h1>`}</span>
                        <span className='text-white'>Decentralist Manifesto</span>
                        <span className='artx-code-green'>{`</h1>`}</span>
                    </p>
                    <p className='apl-48 mb-0 artx-type-et artx-code-green'>
                        <span className='artx-code-green'>{`<p>`}</span>
                        <span className='text-white'>Decentralism is one of the most influential art movements in the early 21st century.</span>
                        <span className='artx-code-green'>{`</p>`}</span></p>
                    <p className='apl-32 mb-0 artx-type-et artx-code-green'>{`</header>`}</p>
                    <p className='apl-32 mb-0 artx-type-et artx-code-green'>
                        <span className='artx-code-green'>{`<time>`}</span>
                        <span className='text-white'>July 7, 2018</span>
                        <span className='artx-code-green'>{`</time>`}</span>
                    </p>
                    <p className='apl-32 mb-0 artx-type-et artx-code-green'>
                        <span className='artx-code-green'>{`<p>`}</span>
                        <span className='text-white'>Decentralism was founded on July 7, 2018 in a coffee shop in New York by a group of artists, critics, tech enthusiasts and philosophers who believe that every human is entitled to complete freedom of creativity. The creative process encompasses the inception of a divine idea to the physical manifestation of this vision to the interaction of this thought with its viewers. This process attains its highest and purest form only when it is independent of the judgement of any entrenched institution or individual.</span>
                        <span className='artx-code-green'>{`</p>`}</span>
                    </p> 
                    <p className='apl-32 mb-0 artx-type-et artx-code-green'>
                        <span className='artx-code-green'>{`<p>`}</span>
                        <span className='text-white'>Heavily influenced by Satoshi Nakamoto and blockchain technology, Decentralists propose a blockchain-based methodology to create art that is fully impervious to external censorship and control. Because decentralist art is computationally impossible to censor or erase, it liberates the creator from the authority and control that vested institutions or individuals hold over the realm of art and aesthetics. Non-reversible creations on the blockchain etch moments of a fleeting human experience onto a tangible eternity, allowing anyone the opportunity to be remembered by history based solely on the value of one’s creation. Decentralism is a creative utopia and democratic initiative in which the power of creativity and judge of value belong in the hands and minds of each individual.</span>
                        <span className='artx-code-green'>{`</p>`}</span>
                    </p>
                    <p className='apl-32 mb-0 artx-type-et artx-code-green'>
                        <span className='artx-code-green'>{`<p>`}</span>
                        <span className='text-white'>ARTX Lab is proud to be the pioneer of Decentralism.</span>
                        <span className='artx-code-green'>{`</p>`}</span>
                    </p> 
                    <p className='apl-32 mb-0 artx-type-et artx-code-green'>
                        <span className='artx-code-green'>{`<p>`}</span>
                        <span className='text-white'>We are Satoshi. Join the movement.</span>
                        <span className='artx-code-green'>{`</p>`}</span>
                    </p>
                    <p className='apl-16 mb-0 artx-type-et artx-code-green'>{`</article>`}</p>
                    <p className='mb-3 artx-type-et artx-code-green'>{`</body>`}</p>
                    <p className='artx-type-et artx-code-green'>{`</html>`}</p>
                </div>
            </div>
            <Quote/>
            <Subscribe/>
        </div>
        <Footer/>
    </div>
);

export default About;