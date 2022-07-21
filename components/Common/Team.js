import React from 'react';
import dynamic from 'next/dynamic';
import { team } from '../Constant/constant';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import * as Icon from 'react-feather';
import Link from 'next/link'

const options = {
    items: 5,
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
}

const Team = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    

     
    return (
        <div className="team-area ptb-80 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Our Awesome Team</h2>
                    <div className="bar"></div>
                </div>
            </div>

            {display ? <OwlCarousel 
                className="team-slider owl-carousel owl-theme owl-theme-style"
                {...options}
            > 
            {team.map((value, index) => (
                <div key={index} className="single-team">
                    <div className="team-image">
                        <img src={value.url_img} alt={value.name} />
                        </div>
                            <div className="team-content">
                            <div className="team-info">
                                <h3>{value.name}</h3>
                                <span>{value.skill}</span>
                            </div>
                        </div>
                    </div>
                    ))}
            </OwlCarousel> : ''}
        </div>
    )
}

export default Team;