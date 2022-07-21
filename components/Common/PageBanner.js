import React from 'react';
import { shape } from '../Constant/constant';

const PageBanner = ({pageTitle, pageTitleSecond}) => {
    return (
        <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <h2>{pageTitle}</h2>
                        <h3>{pageTitleSecond}</h3>
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
    );
}

export default PageBanner;