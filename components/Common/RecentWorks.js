import React from 'react';
import Link from 'next/link';
import { project } from '../Constant/constant';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 4,
    loop: true,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
}

const RecentWorks = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="works-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h3>Our Projects</h3>
                    <div className="bar"></div>
                </div>
            </div>

            {display ? <OwlCarousel 
                className="works-slides owl-carousel owl-theme"
                {...options}
            > 
            {project.map((value, index) => (
                <div key={index} className="single-works">
                    <img src={value.img} alt={value.name} />
                    <div className="works-content">
                        <h2>
                            <Link href={value.url}>
                                <a>{value.name}</a>
                            </Link>
                        </h2>
                    <p>{value.introduction}</p>
                    </div>
                </div>
            ))}        
            </OwlCarousel> : ''}
            
            {/* Shape Images */}
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
        </div>
    )
}

export default RecentWorks;
