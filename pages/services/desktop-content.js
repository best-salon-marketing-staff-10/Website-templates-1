import Head from 'next/head';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonFullListOfOurServices from '/pages/Components/buttons/button-full-list-of-our-services.js';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { menu } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import { images } from '/pages/core/info';
import Service1 from '/pages/services/service-1';
import Service2 from '/pages/services/service-2';
import Service3 from '/pages/services/service-3';
import Service4 from '/pages/services/service-4';
import Service5 from '/pages/services/service-5';
import Service6 from '/pages/services/service-6';
import Service7 from '/pages/services/service-7';
import Service1PriceList from '/pages/services/service-1-price-list';
import Service2PriceList from '/pages/services/service-2-price-list';
import Service3PriceList from '/pages/services/service-3-price-list';
import Service4PriceList from '/pages/services/service-4-price-list';
import Service5PriceList from '/pages/services/service-5-price-list';
import Service6PriceList from '/pages/services/service-6-price-list';
import Service7PriceList from '/pages/services/service-7-price-list';
import Button3 from '/pages/Components/buttons/button-3.js';
import { processedInfo } from '/pages/core/info';
import { changedInfo } from '/pages/core/info';
import TimeSchedule from '/pages/Components/time-schedule/time-schedule';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DesktopTopBar from '/pages/Components/nav-bar/desktop-top-bar.js';
import DesktopNavBar from'/pages/Components/nav-bar/desktop-nav-bar.js';

export default function DesktopContent() {

  if (process.browser){
    document.oncontextmenu = new Function("return false;");
  }
  return (
    
    <>
        <Head>
        </Head>
        <div className="desktop-service-background">
            <div className="">
                <DesktopTopBar />
            </div>
            <div className="">
                <DesktopNavBar />
            </div>
            <div className="desktop-service-content">
                <div className="first-screen-service-block">
                    <h1 className="first-screen-service-block-title">
                        Services
                    </h1>
                </div>
            </div>
            <div className="service-block">
                <h2 className="content-name-business">
                    Top Nails Exeter
                </h2>
                <div className="service-content-block">
                    <div className="service-menu">
                        <div className="service-header-menu">
                            <h5>
                                Touch Category to Qyickly view
                            </h5>
                        </div>
                        <div className="service-menu-list">
                            <div className="service-list">
                                <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory1}>
                                    <div className="service-list-1">
                                        {serviceCategory.serviceCategory1}
                                    </div>
                                </Link>
                                <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory2}>
                                    <div className="service-list-2">
                                        {serviceCategory.serviceCategory2}
                                    </div>
                                </Link>
                                <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory3}>
                                    <div className="service-list-3">
                                        {serviceCategory.serviceCategory3}
                                    </div>
                                </Link>
                                <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory4}>
                                    <div className="service-list-4">
                                        {serviceCategory.serviceCategory4}
                                    </div>
                                </Link>
                                <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory5}>
                                    <div className="service-list-5">
                                        {serviceCategory.serviceCategory5}
                                    </div>
                                </Link>
                                <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory6}>
                                <div className="service-list-6">
                                    {serviceCategory.serviceCategory6}
                                </div>
                                </Link>
                                <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory7}>
                                    <div className="service-list-7">
                                        {serviceCategory.serviceCategory7}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="service-list-content">
                        <div className="services-list-1">
                            <div className="service-container">
                                <div>
                                    <Service1 />
                                </div>
                                <div id="d-service-list-1">
                                    <Service1PriceList />
                                </div>
                                <div className="button">
                                    <Button3 />
                                </div>
                            </div>
                        </div>
                        <div className="services-list-2">
                            <div className="service-container">
                                <div>
                                    <Service2 />
                                </div>
                                <div id="d-service-list-2">
                                    <Service2PriceList />
                                </div>
                                <div className="button">
                                    <Button3 />
                                </div>
                            </div>
                        </div>
                        <div className="services-list-3">
                            <div className="service-container">
                                <div>
                                    <Service3 />
                                </div>
                                <div id="d-service-list-3">
                                    <Service3PriceList />
                                </div>
                                <div className="button">
                                    <Button3 />
                                </div>
                            </div>
                        </div>
                        <div className="services-list-4">
                            <div className="service-container">
                                <div>
                                    <Service4 />
                                </div>
                                <div id="d-service-list-4">
                                    <Service4PriceList />
                                </div>
                                <div className="button">
                                    <Button3 />
                                </div>
                            </div>
                        </div>
                        <div className="services-list-5">
                            <div className="service-container">
                                <div>
                                    <Service5 />
                                </div>
                                <div id="d-service-list-5">
                                    <Service5PriceList />
                                </div>
                                <div className="button">
                                    <Button3 />
                                </div>
                            </div>
                        </div>
                        <div className="services-list-6">
                            <div className="service-container">
                                <div>
                                    <Service6 />
                                </div>
                                <div id="d-service-list-6">
                                <Service6PriceList />
                                </div>
                                <div className="button">
                                    <Button3 />
                                </div>
                            </div>
                        </div>
                        <div className="services-list-7">
                            <div className="service-container">
                                <div>
                                    <Service7 />
                                </div>
                                <div id="d-service-list-7">
                                <Service7PriceList />
                                </div>
                                <div className="button">
                                    <Button3 />
                                </div>
                            </div>
                        </div>
                    </div>
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
