import React, {useState, useEffect} from 'react';
import 'materialize-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitterSquare, faSnapchatSquare,faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

const Index = () => {
    const [aquiladatas, setAquiladatas] = useState({name: '' , social_media: {twitter: '', instagram: '', snapchat: '', email: ''}});

    const profileApi = 'https://hirng-x2021.glitch.me/api';

    useEffect(()=>{
        const fetchApi = async () => {
            const data = await fetch(profileApi);
            const response = await data.json();
            const resObj = {
                name: response.name, 
                social_media: {
                    twitter: response.social_media.twitter,
                     instagram: response.social_media.instagram, 
                     snapchat: response.social_media.snapchat, 
                     email: response.social_media.email,
                    }
            }
            setAquiladatas(resObj);
           
        }
        fetchApi()

    }, [])
    return (
        <div className="layer">
            <div className="box-image">
                <img className="responsive-img" src="aquila.png" alt="aquila girl" width="600px" /> 
                <ul className="socialicon">
                    <li>
                    <a href={aquiladatas.social_media.instagram} className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                    </li>
                    <li>
                    <a href={aquiladatas.social_media.twitter} className="twitter social">
                        <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
                    </a> 
                    </li>
                   <li>
                  <li>
                    <a href={aquiladatas.social_media.snapchat} className="snapchat social">
                        <FontAwesomeIcon icon={faSnapchatSquare} size="3x" />
                    </a> 
                  </li>
                   <li>
                    <a href={aquiladatas.social_media.email} className="envelope social">
                        <FontAwesomeIcon icon={faEnvelopeSquare} size="3x" />
                    </a>  
                   </li>
                </li> 
                </ul>
                <div className="navbar">
                    <a href="#home" className="navigate">HOME</a>
                    <a href="#about" className="navigate">ABOUT</a>
                    <img className="iconimg" src="roundimg.png" alt="rounded"/>
                    <a href="#gallery" className="navigate">GALLERY</a>
                    <a href="#contact" className="navigate">CONTACT</a>
                </div>
            </div>  
            <h3>{aquiladatas.name}</h3>
        </div>
    )
}

export default Index
