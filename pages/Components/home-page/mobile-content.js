import Link from 'next/link';
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
import CustomerReview from '/pages/Components/customer-review';
import { imageAlt } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import { images } from '/pages/core/info';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { processedInfo } from '/pages/core/info';
import { changedInfo } from '/pages/core/info';
import { button } from '/pages/core/info';




export default function MobileContent() {
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
                            src={images.tabletCarouselImage1} />
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
                    <div className="homepage-mobile-services-content">
                        <div className="homepage-mobile-services-content-title">
                            Our Services
                        </div>
                        <div className="homepage-mobile-services-content-description">
                            Fall in Love with the Art of Nails
                        </div>
                    </div>
                    <Link legacyBehavior href={button.button6LinkToMobile}>
                        <div className="services-list-1">
                            <div className="service-container">
                                <div className="homepage-service-content">
                                    <img alt={imageAlt.serviceList1Image1Alt} 
                                            src={images.serviceList1Image1} />
                                    <div className="homepage-service-content-text">
                                        <h1 className="homepage-service-content-title">
                                            {serviceCategory.serviceCategory1}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link legacyBehavior href={button.button7LinkToMobile}>
                        <div className="services-list-2">
                            <div className="service-container">
                                <div className="homepage-service-content">
                                    <img alt={imageAlt.serviceList2Image1Alt} src={images.serviceList2Image1} />
                                    <div className="homepage-service-content-text">
                                        <h1 className="homepage-service-content-title">
                                            {serviceCategory.serviceCategory2}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link legacyBehavior href={button.button8LinkToMobile}>
                        <div className="services-list-3">
                            <div className="service-container">
                                <div className="homepage-service-content">
                                    <img alt={imageAlt.serviceList3Image3Alt}  src={images.serviceList3Image3} />
                                    <div className="homepage-service-content-text">
                                        <h1 className="homepage-service-content-title">
                                            {serviceCategory.serviceCategory3}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link legacyBehavior href={button.button9LinkToMobile}>
                        <div className="services-list-4">
                            <div className="service-container">
                                <div className="homepage-service-content">
                                    <img alt={imageAlt.serviceList4Image1Alt} src={images.serviceList4Image1} />
                                    <div className="homepage-service-content-text">
                                        <h1 className="homepage-service-content-title">
                                            {serviceCategory.serviceCategory4}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link legacyBehavior href={button.button10LinkToMobile}>
                        <div className="services-list-5">
                            <div className="service-container">
                                <div className="homepage-service-content">
                                    <img alt={imageAlt.serviceList5Image2Alt} src={images.serviceList5Image2} />
                                    <div className="homepage-service-content-text">
                                        <h1 className="homepage-service-content-title">
                                            {serviceCategory.serviceCategory5}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link legacyBehavior href={button.button11LinkToMobile}>
                        <div className="services-list-6">
                            <div className="service-container">
                                <div className="homepage-service-content">
                                    <img alt={imageAlt.serviceList6Image1Alt} src={images.serviceList6Image1} />
                                    <div className="homepage-service-content-text">
                                        <h1 className="homepage-service-content-title">
                                            {serviceCategory.serviceCategory6}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link legacyBehavior href={button.button12LinkToMobile}>
                        <div className="services-list-7">
                            <div className="service-container">
                                <div className="homepage-service-content">
                                    <img alt={imageAlt.serviceList7Image1Alt} src={images.serviceList7Image1} />
                                    <div className="homepage-service-content-text">
                                        <h1 className="homepage-service-content-title">
                                        {serviceCategory.serviceCategory7}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
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
                                <div >
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
