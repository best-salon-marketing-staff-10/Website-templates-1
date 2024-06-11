import Link from 'next/link';
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
import { menu } from '/pages/core/info';



export default function DesktopContent() {
  //Không sử dụng chuột phải
  if (process.browser){
  document.oncontextmenu = new Function("return false;");
  }
  return (
    <>
       <div className="top-bar-wrapper">
            <Link legacyBehavior href={processedInfo.callBusiness}>
                <div className="top-bar-item-left">
                    91 South St, Exeter, EX1 1EN
                </div>
            </Link>
            <div>
            </div>
            <Link legacyBehavior href={menu.linkToMainMenu3}>
                <div className="top-bar-item-right">
                    CALL NOW: 07990099119
                </div>
            </Link>
        </div>
        <div className="nav-bar">
            <Link legacyBehavior href="/">
                <div className="logo-container">
                    <div className="logo">
                        <img className="logo"src={changedInfo.businessLogo} />
                    </div>
                    <div className="logo-text">
                        <h2 className="logo-text-1">
                            {changedInfo.businessName}
                        </h2>
                        <div className="logo-text-2">
                            {changedInfo.businessAddressLevel2}, {changedInfo.businessAddressLevel3}
                        </div>
                    </div>
                </div>
            </Link>
            <div className="nav-bar-menu">
                <div className="nav-bar-menu-left">
                    <h2 className="nav-bar-main-category">
                        <Link legacyBehavior href={menu.linkToMainMenu1}>
                            <a className="nav-bar-link-main-menu">
                                {menu.mainMenu1}
                            </a>
                        </Link>
                    </h2>
                    <h2 className="nav-bar-main-category">
                        <Link legacyBehavior href={menu.linkToMainMenu2}>
                            <a className="nav-bar-link-main-menu">
                                {menu.mainMenu2}
                            </a>
                        </Link>
                    </h2>
                    <h2>
                        <Link legacyBehavior href={menu.linkToMainMenu4}>
                            <a className="nav-bar-link-main-menu">
                                {menu.mainMenu4}
                            </a>
                        </Link>
                    </h2>
                </div>
                <div>
                </div>
                <div className="nav-bar-menu-right">
                    <h2 className="nav-bar-main-category">
                        <Link legacyBehavior href={menu.linkToMainMenu3}>
                            <a className="nav-bar-link-main-menu">
                                {menu.mainMenu3}
                            </a>
                        </Link>
                    </h2>
                    <h2 className="nav-bar-main-category">
                        <Link legacyBehavior href={menu.linkToMainMenu5}>
                            <a className="nav-bar-link-main-menu">
                                {menu.mainMenu5}
                            </a>
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
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
                        <div className="nhan-manh-2-content"> 
                            <div className="nhan-manh-content-wrapper">
                                <h2 className="nhan-manh-content-header">
                                    {pageContent.section5Heading}
                                </h2>
                                <div className="nhan-manh-content-description">
                                    {pageContent.section5Description}
                                </div>
                                <div className="nhan-manh-2-button">
                                    <Button1 />
                                </div>
                            </div>
                            <div className="nhan-manh-2-desktop-images">
                                <img className="nhan-manh-2-desktop-image" alt={imageAlt.section5Image1Alt} src={images.section5Image1} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dong-vien-6">
                    <div className="nhan-manh-3-desktop-background">
                        <div className="nhan-manh-3-content">
                                <div className="nhan-manh-3-desktop-content-wrapper">
                                    <h2 className="nhan-manh-3-desktop-content-header">
                                        {pageContent.section6Heading}
                                    </h2>
                                    <div className="nhan-manh-3-desktop-content-description">
                                        {pageContent.section6Description}
                                    </div>
                                </div>
                            <div className="nhan-manh-3-desktop-images">
                                    <img className="nhan-manh-3-image" alt={imageAlt.section6Image1Alt} src={images.section6Image1} />
                                    <img className="nhan-manh-3-image" alt={imageAlt.section7Image1Alt} src={images.section7Image1} />
                                    <img className="nhan-manh-3-image" alt={imageAlt.section6Image1Alt} src={images.section7Image2} />
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
                            </div>
                            <div className="nhan-manh-4-content-image">
                                <img className="nhan-manh-4-content-image-1" src={images.section7Image3} />
                                <img className="nhan-manh-4-content-image-2" src={images.section7Image4} />
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
                                        <div className="nhan-manh-4-content-2-images">
                                        <img className="nhan-manh-4-content-2-image" src={images.section7Image3} />
                                        <img className="nhan-manh-4-content-2-image" src={images.section7Image4} />
                                        <img className="nhan-manh-4-content-2-image" src={images.section7Image4} />
                                    </div>
                                        <div>
                                            <Button2 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <CustomerReview/>
                    </div>
                </div>
                <div className="homepage-desktop-services">
                    <div className="homepage-desktop-services-content">
                        <div className="homepage-desktop-services-content-title">
                            Our Services
                        </div>
                        <div className="homepage-desktop-services-content-description">
                            Fall in Love with the Art of Nails
                        </div>
                    </div>
                    <div className="homepage-desktop-services-list">
                        <Link legacyBehavior href={button.button6LinkToDesktop}>
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
                        </Link>
                        <Link legacyBehavior href={button.button7LinkToDesktop}>
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
                        </Link>
                        <Link legacyBehavior href={button.button8LinkToDesktop}>
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
                        </Link>
                        <Link legacyBehavior href={button.button9LinkToDesktop}>
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
                        </Link>
                        <Link legacyBehavior href={button.button10LinkToDesktop}>
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
                        </Link>
                        <Link legacyBehavior href={button.button11LinkToDesktop}>
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
                        </Link>
                        <Link legacyBehavior href={button.button12LinkToDesktop}>
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
                        </Link>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-block">
                        <div>
                            <Link legacyBehavior href="/">
                                <div className="footer-logo-name">
                                    <div className="footer-logo-container">
                                        <div className="footer-logo">
                                            <img className="footer-logo"src={changedInfo.businessLogo} />
                                        </div>
                                        <div className="footer-logo-text">
                                            <h2 className="footer-logo-text-1">
                                                {changedInfo.businessName}
                                            </h2>
                                            <div className="footer-logo-text-2">
                                                {changedInfo.businessAddressLevel2}, {changedInfo.businessAddressLevel3}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="time-schedule">
                                <TimeSchedule/>
                            </div>
                        </div>
                        
                        <div className="footer-navigation-item-details">
                            <div className="footer-navigation-item">
                                <h2 className="footer-navigation-item">
                                    {menu.mainMenu6}
                                </h2>
                                <Link legacyBehavior href={processedInfo.callBusiness}>
                                    <div className="footer-navigation-item-details-1">
                                        <div className="footer-image-block">
                                            <img className="footer-image-1" alt={imageAlt.footerImagePhoneIconAlt} src={images.footerImagePhoneIcon} />
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
                                        <div className="footer-image-block">
                                            <img className="footer-image-2" alt={imageAlt.footerImageMapPointerIconAlt}  src={images.footerImageMapPointerIcon} />
                                        </div>
                                        <div>
                                            <a className="footer-navigation-item-details">
                                                {processedInfo.businessAddress}
                                            </a>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            </div>
                        <div className="footer-navigation">
                            <div className="footer-navigation-item-group-1">
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
                                        <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory1}>
                                            <a className="services-list-1">
                                                {serviceCategory.serviceCategory1}
                                            </a>
                                        </Link>
                                    </h3>
                                    <h3 className="footer-navigation-item-detail-services">
                                        <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory2}>
                                            <a className="services-list-2">
                                                {serviceCategory.serviceCategory2}
                                            </a>
                                        </Link>
                                    </h3>
                                    <h3 className="footer-navigation-item-detail-services">
                                        <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory3}>
                                            <a className="services-list-3">
                                                {serviceCategory.serviceCategory3}
                                            </a>
                                        </Link>
                                    </h3>
                                    <h3 className="footer-navigation-item-detail-services">
                                        <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory4}>
                                            <a className="services-list-4">
                                                {serviceCategory.serviceCategory4}
                                            </a>
                                        </Link>
                                    </h3>
                                    <h3 className="footer-navigation-item-detail-services">
                                        <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory5}>
                                            <a className="services-list-5">
                                                {serviceCategory.serviceCategory5}
                                            </a>
                                        </Link>
                                    </h3>
                                    <h3 className="footer-navigation-item-detail-services">
                                        <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory6}>
                                            <a className="services-list-6">
                                                {serviceCategory.serviceCategory6}
                                            </a>
                                        </Link>
                                    </h3>
                                    <h3 className="footer-navigation-item-detail-services">
                                        <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory7}>
                                            <a className="services-list-7">
                                                {serviceCategory.serviceCategory7}
                                            </a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    <div className="footer-navigation-item-group-2">
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
                    </div>
                </div> 

                    </div>
                
                <div className="footer-navigation-item-iframe-map">
                    <h2 className="footer-navigation-item-location">
                        <a className="footer-location">
                            Location
                        </a>
                    </h2>
                    <div className="footer-navigation-item-map">
                        <div className="iframe-map">
                            <iframe src={changedInfo.iframeMapLink} width="1500" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    
                </div>
                <div className="divider">
                    <NavDropdown.Divider />
                </div>
                <div className="footer-copyright">
                    <Link legacyBehavior href={pageContent.copyrightWebsiteLink}>
                        <a className="footer-copyright" rel="dofollow">
                            © Copyright and Powered by Best Salon Marketing
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}
