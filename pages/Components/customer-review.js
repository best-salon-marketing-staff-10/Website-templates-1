import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button3 from '/pages/Components/buttons/button-3';
import { pageContent } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import { images } from '/pages/core/info';





export default function CustomerReview() {
    return (
        <>
            <div className="customer-review">
                <div className="customer-review-text">
                    <div className="customer-review-title">
                        {pageContent.customerReviewHeading}
                    </div>
                    <div>
                        {pageContent.customerReviewDescription}
                    </div>
                    <div className="divider">
                    </div>
                </div>
                
                <div className="customer-review-content">
                            <div className="customer-content">
                                "{pageContent.cusReviewContent1}"
                                <br/>
                                <span className="customer-content-name">
                                    {pageContent.cusReview1}
                                </span>
                                
                            </div>
                            <div className="customer-content">
                                "{pageContent.cusReviewContent2}"
                                <br/>
                                <span className="customer-content-name">
                                    {pageContent.cusReview2}
                                </span>
                                
                            </div>
                            <div className="customer-content">
                                "{pageContent.cusReviewContent3}"
                                <br/>
                                <span className="customer-content-name">
                                    {pageContent.cusReview3}
                                </span>
                                
                            </div>
                            <div className="customer-content">
                                "{pageContent.cusReviewContent4}"
                                <br/>
                                <span className="customer-content-name">
                                    {pageContent.cusReview4}
                                </span>
                                
                            </div>
                            <div className="customer-content">
                                "{pageContent.cusReviewContent5}"
                                <br/>
                                <span className="customer-content-name">
                                    {pageContent.cusReview5}
                                </span>
                                
                            </div>
                </div>    
                <div className="button">
                    
                </div>       
            </div>
        </>
    )
}