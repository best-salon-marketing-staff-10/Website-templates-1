import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonFullListOfOurServices from '/pages/Components/buttons/button-full-list-of-our-services.js';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { menu } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';

import Button1 from '/pages/Components/buttons/button-1';
import Button2 from '/pages/Components/buttons/button-2';
import TimeSchedule from '/pages/Components/time-schedule/time-schedule';
import Location from '/pages/Components/location/location';
import CustomerReview from '/pages/Components/customer-review';
import DongVien1 from '/pages/Components/dong-vien/dong-vien-1';
import DongVien2 from '/pages/Components/dong-vien/dong-vien-2';
import DongVien3 from '/pages/Components/dong-vien/dong-vien-3';
import Service1 from '/pages/services/service-1';
import Service2 from '/pages/services/service-2';
import Service3 from '/pages/services/service-3';
import Service4 from '/pages/services/service-4';
import Service5 from '/pages/services/service-5';
import Service6 from '/pages/services/service-6';
import Service7 from '/pages/services/service-7';
import NhanManh1 from '/pages/Components/dong-vien/nhan-manh-1';
import NhanManh2 from '/pages/Components/dong-vien/nhan-manh-2';
import NhanManh3 from '/pages/Components/dong-vien/nhan-manh-3';
import NhanManh4 from '/pages/Components/dong-vien/nhan-manh-4';
import Offers from '/pages/Components/offers/offers';
import { imageAlt } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import { images } from '/pages/core/info';

import Carousel from 'react-bootstrap/Carousel';

export default function Test() {
  //Không sử dụng chuột phải
  if (process.browser){
  document.oncontextmenu = new Function("return false;");
  }
  return (
    <>
        <div className="nav-bar">
        
                <div className="nav-bar-menu">
                <Navbar expand={false} bg="" fixed="top" className="customer-navbar">
                        <Container className="hamburger" fluid>
                            <LogoNav />
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Toggle  aria-controls="offcanvasNavbar" />
                            <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                            >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">
                                    <Link legacyBehavior href="/">
                                        <LogoNav />
                                    </Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <div className="nav-bar-main-category">
                                        <Link legacyBehavior href={menu.linkToMainMenu1}>
                                            <a className="nav-bar-link-main-menu">
                                                {menu.mainMenu1}
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link legacyBehavior href={menu.linkToMainMenu4}>
                                            <a className="nav-bar-link-main-menu">
                                                {menu.mainMenu4}
                                            </a>
                                        </Link>
                                        <div className="nav-bar-services-sub-category">
                                        <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-1">
                                                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory1}>
                                                        <a className="nav-bar-link-service-category"> 
                                                            {serviceCategory.serviceCategory1}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-2">
                                                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory2}>
                                                        <a className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory2}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>    
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-3">
                                                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory3}>
                                                        <a className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory3}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-4">
                                                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory4}>
                                                        <a className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory4}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-5">
                                                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory5}>
                                                        <a className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory5}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-6">
                                                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory6}>
                                                        <a className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory6}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-7">
                                                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory7}>
                                                        <a className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory7}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link legacyBehavior href={menu.linkToMainMenu3}>
                                            <a className="nav-bar-link-main-menu">
                                                {menu.mainMenu3}
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link legacyBehavior href={menu.linkToMainMenu2}>
                                            <a className="nav-bar-link-main-menu">
                                                {menu.mainMenu2}
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link legacyBehavior href={menu.linkToMainMenu5}>
                                            <a className="nav-bar-link-main-menu">
                                                {menu.mainMenu5}
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="button">
                                        <ButtonFullListOfOurServices />
                                    </div>
                                </Nav>
                            </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>        
                </div>
            </div>
            <div className="mobile-content">
                <div className="first-screen-block">
                    <img className="first-screen-block-anh" alt={imageAlt.mobileCarouselImage1Alt} 
                            src={images.mobileCarouselImage1} />
                    <div className="first-screen-block-bottom">
                        <h1 className="first-screen-block-title">
                            {pageContent.carouselHeading}
                        </h1>
                        <div className="button">
                        </div>
                    </div>
                </div>
                <div className="dong-vien-5">
                    <div className="nhan-manh-2-background">
                        <div className="nhan-manh-content"> 
                            <div className="nhan-manh-content-wrapper">
                                <h2 className="nhan-manh-2-content-header">
                                    {pageContent.section5Heading}
                                </h2>
                                <div className="nhan-manh-2-content-description">
                                    {pageContent.section5Description}
                                </div>
                                <div>
                                    <Button1 />
                                </div>
                            </div>
                            <div className="nhan-manh-2-images">
                                <img className="nhan-manh-2-image-1" alt={imageAlt.section5Image1Alt} src={images.section5Image1} />
                                <img className="nhan-manh-2-image-2" src={images.section5Image2} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dong-vien-6">
                    <div className="nhan-manh-3-background">
                        <div className="nhan-manh-content">
                            <div className="nhan-manh-content-wrapper">
                                <h2 className="nhan-manh-3-content-header">
                                    {pageContent.section6Heading}
                                </h2>
                                <div className="nhan-manh-3-content-description">
                                    {pageContent.section6Description}
                                </div>
                            </div>
                            <div className="nhan-manh-3-images">
                                <img className="nhan-manh-3-image-1" alt={imageAlt.section6Image1Alt} src={images.section6Image1} />
                                <img className="nhan-manh-3-image-2" src={images.section6Image2} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dong-vien-7">
                    <div className="nhan-manh-4-background">
                        <div className="nhan-manh-4-content-1">
                            <div className="nhan-manh-4-content-1-wrapper">
                                <h2 className="nhan-manh-4-content-header">
                                    {pageContent.section7Heading}
                                </h2>
                                <div className="nhan-manh-4-content-description">
                                    {pageContent.section7Description}
                                </div>
                            </div>
                            <div className="nhan-manh-4-content-1-image">
                                <img className="nhan-manh-4-content-1-image-1" alt={imageAlt.section7Image1Alt} src={images.section7Image1} />
                                <img className="nhan-manh-4-content-1-image-2" src={images.section7Image2} />
                            </div>
                        </div>
                        <div className="nhan-manh-4-content-2">
                            <div className="nhan-manh-4-content-2-wrapper">
                                <div className="nhan-manh-4-content-wrapper">
                                    <h2 className="nhan-manh-4-content-header-4">
                                        {pageContent.section8Heading}
                                    </h2>
                                    <div className="nhan-manh-4-content-description">
                                        {pageContent.section8Description}
                                    </div>
                                    <div className="nhan-manh-4-content-2-image">
                                        <img className="nhan-manh-4-content-2-image-1" src={images.section7Image3} />
                                        <img className="nhan-manh-4-content-2-image-2" src={images.section7Image4} />
                                    </div>
                                    <div className="nhan-manh-4-button">
                                        <Button2/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <CustomerReview />
                </div>
                <div className="homepage-mobile-services">
                    <div className="services-list-1">
                        <div className="service-container">
                            <div className="homepage-service-content">
                                <img className="carousel-image" alt={imageAlt.serviceList1Image1Alt} 
                                        src={images.serviceList1Image1} />
                                <div className="homepage-service-content-text">
                                    <h1 className="homepage-service-content-title">
                                        {serviceCategory.serviceCategory1}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-list-2">
                        <div className="service-container">
                            <div className="homepage-service-content">
                                <img className="carousel-image"alt={imageAlt.serviceList2Image1Alt} src={images.serviceList2Image1} />
                                <div className="homepage-service-content-text">
                                    <h1 className="homepage-service-content-title">
                                        {serviceCategory.serviceCategory2}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-list-3">
                        <div className="service-container">
                            <div className="homepage-service-content">
                                <img className="carousel-image" alt={imageAlt.serviceList3Image3Alt}  src={images.serviceList3Image3} />
                                <div className="homepage-service-content-text">
                                    <h1 className="homepage-service-content-title">
                                        {serviceCategory.serviceCategory3}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-list-4">
                        <div className="service-container">
                            <div className="homepage-service-content">
                                <img className="carousel-image" alt={imageAlt.serviceList4Image1Alt} src={images.serviceList4Image1} />
                                <div className="homepage-service-content-text">
                                    <h1 className="homepage-service-content-title">
                                        {serviceCategory.serviceCategory4}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-list-5">
                        <div className="service-container">
                            <div className="homepage-service-content">
                                <img className="carousel-image" alt={imageAlt.serviceList5Image2Alt} src={images.serviceList5Image2} />
                                <div className="homepage-service-content-text">
                                    <h1 className="homepage-service-content-title">
                                        {serviceCategory.serviceCategory5}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-list-6">
                        <div className="service-container">
                            <div className="homepage-service-content">
                                <img className="carousel-image" alt={imageAlt.serviceList6Image1Alt} src={images.serviceList6Image1} />
                                <div className="homepage-service-content-text">
                                    <h1 className="homepage-service-content-title">
                                        {serviceCategory.serviceCategory6}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-list-7">
                        <div className="service-container">
                            <div className="homepage-service-content">
                                <img className="carousel-image" alt={imageAlt.serviceList7Image1Alt} src={images.serviceList7Image1} />
                                <div className="homepage-service-content-text">
                                    <h1 className="homepage-service-content-title">
                                    {serviceCategory.serviceCategory7}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div> 
                        <Button2 />
                    </div>
                </div>
                
                <div className="location-time-schedule">
                    <div className="location">
                    </div>
                    <div className="time-schedule">
                        <TimeSchedule />
                    </div> 
                </div>
            </div>
            <div className="mobile-bottom-nav-bar-section-bottom-nav-bar">
                <Navbar expand={false} bg="white" variant="d" fixed="bottom">
                    <div className="mobile-bottom-nav-bar-section">
                        <Link legacyBehavior href={images.BottomNavButton1LinkTo}>
                            <a className="mobile-bottom-nav-bar-link-a">
                                <div className="mobile-bottom-nav-bar-home">
                                    <div>
                                        <img className="mobile-bottom-nav-bar-img" alt={images.BottomNavButton1IconAlt} src={images.BottomNavButton1Icon} />
                                    </div>
                                    <div className="mobile-bottom-nav-bar-section-content">
                                        {images.BottomNavButton1Content}
                                    </div>   
                                </div>
                            </a>
                        </Link>
                        <Link legacyBehavior href={images.BottomNavButton2LinkTo}>
                            <a className="mobile-bottom-nav-bar-link-a">
                                <div className="mobile-bottom-nav-bar-services">
                                    <div>
                                        <img className="mobile-bottom-nav-bar-img" alt={images.BottomNavButton2IconAlt} src={images.BottomNavButton2Icon} />
                                    </div>
                                    <div className="mobile-bottom-nav-bar-section-content">  
                                        {images.BottomNavButton2Content}
                                    </div> 
                                </div>
                            </a>
                        </Link>
                        <Link legacyBehavior href={menu.linkToMainMenu3}>
                            <a className="mobile-bottom-nav-bar-link-a">
                                <div className="mobile-bottom-nav-bar-contact-us">
                                    <div>
                                        <img className="mobile-bottom-nav-bar-img" alt={images.BottomNavButton3IconAlt} src={images.BottomNavButton3Icon} />
                                    </div>
                                    <div className="mobile-bottom-nav-bar-section-content">
                                        Appointment&nbsp;now 
                                    </div> 
                                </div>
                            </a>
                        </Link>
                    </div>    
                </Navbar>
            </div>
    </>
  )
}
