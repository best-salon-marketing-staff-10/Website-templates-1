import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button3 from '/pages/Components/buttons/button-3';
import { pageContent } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import { images } from '/pages/core/info';
import { button } from '/pages/core/info';





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
                <div className="customer-review-content-block">
                    <div className="customer-review-content">
                        <Carousel controls={false} interval="2000">
                            <Carousel.Item>
                                <div className="customer-content">
                                    <div className="customer-content-name-block">
                                        <div>
                                            <img src={images.customerImage1} />
                                        </div>
                                        <div className="customer-content-name">
                                            {pageContent.cusReview1}
                                        </div>
                                    </div>
                                    <div className="content">
                                        {pageContent.cusReviewContent1}
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="customer-content">
                                    <div className="customer-content-name-block">
                                        <div>
                                            <img src={images.customerImage2} />
                                        </div>
                                        <div className="customer-content-name">
                                            {pageContent.cusReview2}
                                        </div>
                                    </div>
                                    <div className="content">
                                        {pageContent.cusReviewContent2}
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="customer-content">
                                    <div className="customer-content-name-block">
                                        <div>
                                            <img src={images.customerImage3} />
                                        </div>
                                        <div className="customer-content-name">
                                            {pageContent.cusReview3}
                                        </div>
                                    </div>
                                    <div className="content">
                                        {pageContent.cusReviewContent3}
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="customer-content">
                                    <div className="customer-content-name-block">
                                        <div>
                                            <img src={images.customerImage4} />
                                        </div>
                                        <div className="customer-content-name">
                                            {pageContent.cusReview4}
                                        </div>
                                    </div>
                                    <div className="content">
                                        {pageContent.cusReviewContent4}
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel> 
                    </div>
                </div>
                <div className="button">
                    
                </div>       
            </div>
        </>
    )
}




