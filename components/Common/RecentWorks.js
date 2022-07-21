import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 4,
    loop: true,
    nav: false,
    autoplay: true,
    margin:30,
    height:250,
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
                    <h3>Our Product</h3>
                    <div className="bar"></div>
                </div>
            </div>

            {display ? <OwlCarousel 
                className="works-slides owl-carousel owl-theme"
                {...options}
            > 
                <div className="single-works">
                    <img src="/images/works-image/drippy.jpg" alt="image" />

                    <Link href="/drippy-project">
                        <a className="icon"><Icon.Settings /></a>
                    </Link>

                    <div className="works-content">
                        <h2>
                            <Link href="/drippy-project">
                                <a>Drippy</a>
                            </Link>
                        </h2>
                      <p>Drippy Zombies is a collection of hand-drawn zombies.</p>
                    </div>
                </div>
    
                <div className="single-works">
                    <img src="/images/works-image/float.jpg" alt="image" />

                    <Link href="/float-project">
                        <a className="icon"><Icon.Settings /></a>
                    </Link>

                    <div className="works-content">
                        <h2>
                            <Link href="/float-project">
                                <a>Float</a>
                            </Link>
                        </h2>
                        <p>Float turns your docs in Notion into a fully operational online course in minutes. 
                            All the power of a traditional course platform, built in the same place you take notes.</p>
                    </div>
                </div>
    
                <div className="single-works">
                    <img src="/images/works-image/olive.jpg" alt="image" />

                    <Link href="/olive-project">
                        <a className="icon"><Icon.Settings /></a>
                    </Link>

                    <div className="works-content">
                        <h2 className='title-h2'>
                            <Link href="/olive-project">
                                <a>Olive</a>
                            </Link>
                        </h2>
                       <p>Olive's machine learning algorithms give you access to option strategies previously only available to institutions and ultra-high net worth individuals.</p>
                    </div>
                </div>
        
                
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
