import Button1 from '../buttons/button-1.js';
import Button2 from '/pages/Components/buttons/button-2';
import Carousel from 'react-bootstrap/Carousel';
import TimeSchedule from '/pages/Components/time-schedule/time-schedule.js';
import Location from '/pages/Components/location/location';
import CustomerReview from '/pages/Components/customer-review.js';
import DongVien1 from '/pages/Components/dong-vien/dong-vien-1.js';
import DongVien2 from '/pages/Components/dong-vien/dong-vien-2.js';
import DongVien3 from '/pages/Components/dong-vien/dong-vien-3.js';
import Service1 from '/pages/services/service-1.js';
import Service2 from '/pages/services/service-2.js';
import Service3 from '/pages/services/service-3.js';
import Service4 from '/pages/services/service-4.js';
import Service5 from '/pages/services/service-5.js';
import Service6 from '/pages/services/service-6.js';
import Service7 from '/pages/services/service-7';
import NhanManh1 from '/pages/Components/dong-vien/nhan-manh-1';
import NhanManh2 from '/pages/Components/dong-vien/nhan-manh-2';
import NhanManh3 from '/pages/Components/dong-vien/nhan-manh-3';
import NhanManh4 from '/pages/Components/dong-vien/nhan-manh-4';
import Offers from '/pages/Components/offers/offers';
import { imageAlt } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import { images } from '/pages/core/info';

export default function DesktopContent(){
    return(
        <>
            <div className="desktop-content">
                <div className="first-screen-block">
                    <img className="first-screen-block-anh" alt={imageAlt.desktopCarouselImage1Alt} src={images.desktopCarouselImage1} />
                    <div className="first-screen-block-bottom">
                        <h1 className="first-screen-block-title">
                            {pageContent.carouselHeading}
                        </h1>
                        <div className="button">

                        </div>
                    </div>
                </div>
                <div className="homepage-desktop-dong-vien">
                    <div className="dong-vien-5">
                        <div className="nhan-manh-2-background">
                            <div className="nhan-manh-content"> 
                                <div className="nhan-manh-content-wrapper">
                                    <h2 className="nhan-manh-content-header">
                                        {pageContent.section5Heading}
                                    </h2>
                                    <div className="nhan-manh-content-description">
                                        {pageContent.section5Description}
                                    </div>
                                </div>
                                <div className="nhan-manh-2-desktop-images">
                                    <img className="nhan-manh-2-desktop-image" alt={imageAlt.section5Image1Alt} src={images.section5Image1} />
                                    <img className="nhan-manh-2-desktop-image" src={images.section5Image2} />
                                    <img className="nhan-manh-2-desktop-image" src={images.section5Image3} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dong-vien-6">
                        <div className="nhan-manh-3-desktop-background">
                            <div className="nhan-manh-content">
                                <div className="nhan-manh-3-desktop-images">
                                    <div className="nhan-manh-3-desktop-content-wrapper">
                                        <h2 className="nhan-manh-3-desktop-content-header">
                                            {pageContent.section6Heading}
                                        </h2>
                                        <div className="nhan-manh-3-desktop-content-description">
                                            {pageContent.section6Description}
                                        </div>
                                    </div>
                                        <img className="nhan-manh-3-image-1" alt={imageAlt.section6Image1Alt} src={images.section6Image1} />
                                </div>
                                <div className="nhan-manh-3-desktop-images">
                                    <img className="nhan-manh-3-image-2" src={images.section6Image2} />
                                    <img className="nhan-manh-3-image-3" src={images.section6Image3} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dong-vien-7">
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
                    </div>
                    <div className="location-time-schedule">
                        <div className="location">
                            <Location/>
                        </div>
                        <div className="time-schedule">
                            <TimeSchedule/>
                        </div>
                    </div>
                </div>
                <div className="homepage-desktop-services">
                    <div className="services-list-1">
                        <div className="service-container">
                            <Service1/>
                        </div>
                    </div>
                    <div className="services-list-2">
                        <div className="service-container">
                            <Service2/>
                        </div>
                    </div>
                    <div className="services-list-3">
                        <div className="service-container">
                            <Service3/>
                        </div>
                    </div>
                    <div className="services-list-4">
                        <div className="service-container">
                            <Service4/>
                        </div>
                    </div>
                    <div className="services-list-5">
                        <div className="service-container">
                            <Service5/>
                        </div>
                    </div>
                    <div className="services-list-6">
                        <div className="service-container">
                            <Service6/>
                        </div>
                    </div>
                    <div className="services-list-7">
                        <div className="service-container">
                            <Service7/>
                        </div>
                    </div>
                </div>
                <div>
                    <CustomerReview/>
                </div>
            </div>

<style jsx>{`
.nhan-manh-2-desktop-images{
    display: flex;
}

.nhan-manh-2-desktop-image{
    max-width: 50%;
    height: 250px;
    border-radius: 100%;
    margin-top: 20px;
}

.dong-vien-6{
    margin-top: 30px;
    left: 0px;
    right: 0px;
}

.nhan-manh-3-desktop-images{
    display: flex;
}

.nhan-manh-3-image-1{
    max-width: 50%;
    height: 250px;
    border-radius: 100%;
}

.nhan-manh-3-image-2,
.nhan-manh-3-image-3{
    max-width: 50%;
    height: 250px;
    border-radius: 100%;
    margin-top: 10px;
}

.nhan-manh-3-desktop-content-wrapper{
    margin-right: 70px;
    margin-bottom: 50px;
    padding: 30px;
}

.nhan-manh-3-desktop-content-header{
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
    font-family: Alegreya Sans;
    color: #198FD9;
}

.nhan-manh-3-desktop-content-description{
    font-family: Noto Sans;
    margin-bottom: 15px;
    font-size: 20px;
}
`}</style>
        </>
    )
}
