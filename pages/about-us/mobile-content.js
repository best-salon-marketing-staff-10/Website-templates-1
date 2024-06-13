import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import Button2 from '/pages/Components/buttons/button-2.js';
import TimeSchedule from '/pages/Components/time-schedule/time-schedule.js';
import DongVien1 from '/pages/Components/dong-vien/dong-vien-1.js';
import DongVien2 from '/pages/Components/dong-vien/dong-vien-2.js';
import DongVien3 from '/pages/Components/dong-vien/dong-vien-3.js';
import CustomerReview from '/pages/Components/customer-review.js';
import OurStory from '/pages/about-us/our-story';
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { images } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { menu } from '/pages/core/info';
import { processedInfo } from '/pages/core/info';
import { changedInfo } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function MobileContent(){
    //Cần biến đoạn này thành component cho ngon lành, component carousel hay gì đó tùy có thể ko cần carousel
    return(
        <>
            <div className="mobile-about-us">
                <div className="first-screen-about-us-block">
                    <h1 className="first-screen-about-us-block-title">
                        About Us
                    </h1>
                </div>
                <div className="about-us-content">
                    <h2 className="content-name-business-about-us">
                        Top Nails Exeter
                    </h2>
                    <div className="content-about-us-description">
                        <p>
                            Top Nails Exeter is a top-notch nail salon and spa in Exeter, EX1 1EN. We are the ideal destination for you to immerse yourself in a luxury environment.
                        </p>
                        <p>
                            We guarantee to provide excellent services, especially catching up with new trends in nail & beauty care services. Our nail salon offers many services such as Manicures, Pedicures, and Nail Enhancement. Our staff & technicians are always there to serve you with the best services. They are all careful in working and comprehensive all your needs. We assure you that you would have a memorable time with us!
                        </p>
                    </div>
                    <div className="about-us-carousel-image">
                        <Carousel fade={true} controls={false} interval="1800">
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="d-block w-100" alt={imageAlt.mobileAboutUsImage1Alt} src={images.mobileAboutUsImage1}/>
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
                    <div className="mobile-about-us-dong-vien">
                        <DongVien1 />
                    </div>
                    <div className="mobile-about-us-dong-vien">
                        <DongVien2 />
                    </div>
                    <div className="mobile-about-us-dong-vien">
                        <DongVien3 />
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-block">
                        <Link  legacyBehavior href="/">
                            <div className="footer-logo">
                                <LogoNav />
                            </div>
                        </Link>
                        <h2 className="footer-navigation-item">
                            {menu.mainMenu6}
                        </h2>
                        <div className="footer-navigation-item-details">
                            <Link legacyBehavior href={processedInfo.callBusiness}>
                                <div className="footer-navigation-item-details-1">
                                    <div className="footer-icon-image">
                                        <img className="footer-image" alt={imageAlt.footerImagePhoneIconAlt} src={images.footerImagePhoneIcon} />
                                    </div>
                                    <div>
                                        <a className="footer-navigation-item-details">
                                            {changedInfo.businessPhoneNumber}
                                        </a>
                                    </div>
                                </div>
                            </Link>  
                            <Link legacyBehavior href={changedInfo.linkToMap}>  
                                <div className="footer-navigation-item-details-2">
                                    <div className="footer-icon-image">
                                        <img className="footer-image" alt={imageAlt.footerImageMapPointerIconAlt}  src={images.footerImageMapPointerIcon} />
                                    </div>
                                    <div>
                                        <a className="footer-navigation-item-details">
                                            {processedInfo.businessAddress}
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="time-schedule">
                            <TimeSchedule />
                        </div> 
                        <div className="footer-navigation">
                            <div className="footer-navigation-item">
                                <h2 className="footer-navigation-item-services">
                                    <Link legacyBehavior href={menu.linkToMainMenu4}>
                                        <a className="footer-navigation-item">
                                            {menu.mainMenu4}
                                        </a>
                                    </Link>
                                </h2>
                                <div className="footer-navigation-item-detail-services">
                                    <h3 className="footer-navigation-item-detail-services">
                                        <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory1}>
                                            <a className="services-list-1">
                                                {serviceCategory.serviceCategory1}
                                            </a>
                                        </Link>
                                    </h3>
                                    <h3 className="footer-navigation-item-detail-services">
                                        <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory2}>
                                            <a className="services-list-2">
                                                {serviceCategory.serviceCategory2}
                                            </a>
                                        </Link>
                                    </h3>
                                    <h3 className="footer-navigation-item-detail-services">
                                        <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory3}>
                                            <a className="services-list-3">
                                                {serviceCategory.serviceCategory3}
                                            </a>
                                        </Link>
                                    </h3>
                                    <h3 className="footer-navigation-item-detail-services">
                                        <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory4}>
                                            <a className="services-list-4">
                                                {serviceCategory.serviceCategory4}
                                            </a>
                                        </Link>
                                    </h3>
                                    <h3 className="footer-navigation-item-detail-services">
                                        <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory5}>
                                            <a className="services-list-5">
                                                {serviceCategory.serviceCategory5}
                                            </a>
                                        </Link>
                                    </h3>
                                    <h3 className="footer-navigation-item-detail-services">
                                        <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory6}>
                                            <a className="services-list-6">
                                                {serviceCategory.serviceCategory6}
                                            </a>
                                        </Link>
                                    </h3>
                                    <h3 className="footer-navigation-item-detail-services">
                                        <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory7}>
                                            <a className="services-list-7">
                                                {serviceCategory.serviceCategory7}
                                            </a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                            <h2 className="footer-navigation-item">
                                <Link legacyBehavior href={menu.linkToMainMenu3}>
                                    <a className="footer-navigation-item">
                                        {menu.mainMenu3}
                                    </a>
                                </Link>
                            </h2>
                            <h2 className="footer-navigation-item">
                                <Link legacyBehavior href={menu.linkToMainMenu2}>
                                    <a className="footer-navigation-item">
                                        {menu.mainMenu2}
                                    </a>
                                </Link>
                            </h2>
                            <h2 className="footer-navigation-item">
                                <Link legacyBehavior href={menu.linkToMainMenu5}>
                                    <a className="footer-navigation-item">
                                        {menu.mainMenu5}
                                    </a>
                                </Link>
                            </h2>
                            <div className="footer-navigation-item-location">
                                <h2 className="footer-navigation-item">
                                    <a className="footer-navigation-item">
                                        Location
                                    </a>
                                </h2>
                                <div className="footer-navigation-item-map">
                                    <iframe src={changedInfo.iframeMapLink} width="730" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="divider">
                            <NavDropdown.Divider />
                        </div>
                        <div className="footer-copyright">
                            <Link legacyBehavior href={pageContent.copyrightWebsiteLink}>
                                <a className="footer-copyright" rel="dofollow">
                                    {pageContent.copyrightContent}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}