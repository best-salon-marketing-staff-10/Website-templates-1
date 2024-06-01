import Button2 from '/pages/Components/buttons/button-2';
import Carousel from 'react-bootstrap/Carousel';
import { imageAlt } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import { images } from '/pages/core/info';

export default function NhanManh4(){

    return(
        <>
            <div className="nhan-manh-4-background">
                <div className="nhan-manh-4-content-1">
                    <div className="nhan-manh-4-content-1-image">
                        <img className="nhan-manh-4-content-1-image-1" alt={imageAlt.section7Image1Alt} src={images.section7Image1} />
                        <img className="nhan-manh-4-content-1-image-2" src={images.section7Image2} />
                    </div>
                    <div className="nhan-manh-4-content-1-wrapper">
                        <h2 className="nhan-manh-4-content-header">
                            {pageContent.section7Heading}
                        </h2>
                        <div className="nhan-manh-4-content-description">
                            {pageContent.section7Description}
                        </div>
                    </div>
                </div>
                <div className="nhan-manh-4-content-2">
                    <div className="nhan-manh-4-content-2-image">
                        <img className="nhan-manh-4-content-2-image-1" src={images.section7Image3} />
                        <img className="nhan-manh-4-content-2-image-2" src={images.section7Image4} />
                    </div>
                    <div className="nhan-manh-4-content-2-wrapper">
                        <div className="nhan-manh-4-content-wrapper">
                            <h2 className="nhan-manh-4-content-header-4">
                                {pageContent.section8Heading}
                            </h2>
                            <div className="nhan-manh-4-content-description">
                                {pageContent.section8Description}
                            </div>
                            <div className="nhan-manh-4-content-carousel-image">
                                <Carousel fade={true} controls={false} interval="2000">
                                    <Carousel.Item>
                                        <div className="carousel-image">
                                            <img className="d-block w-100" alt={imageAlt.mobileAboutUsImage1Alt} src={images.mobileAboutUsImage1} />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="carousel-image">
                                            <img className="d-block w-100" alt={imageAlt.mobileAboutUsImage2Alt} src={images.mobileAboutUsImage2} />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="carousel-image">
                                            <img className="d-block w-100" alt={imageAlt.mobileAboutUsImage3Alt} src={images.mobileAboutUsImage3} />
                                        </div>
                                    </Carousel.Item>
                                </Carousel> 
                            </div>
                            <div>
                                <Button2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}