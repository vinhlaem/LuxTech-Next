import React from 'react';
import Link from 'next/link';
import { img, shape } from '../Constant/constant';

const MainBanner = () => {
    return (
		<div className="main-banner">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-5">
								<div className="hero-content">
									<h1>Comprehensive Technology Solutions For Businesses</h1>
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1">
								<div className="banner-image">
                                    {img.map((value, index) => (
                                         <img key={index}
                                         src={value.url} 
                                         className={value.classname}
                                         alt={value.alt}
                                     />
                                    ))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            {/* Shape Images */}

            {shape.map((value, index) => (
                <div key={index} className={value.shape}>
				    <img src={value.urlimg} alt="shape"/>
			    </div>
            ))}
			
			
		</div>
    )
}

export default MainBanner