import Link from 'next/link';
import Head from 'next/head';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { menu } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';
import { processedInfo } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import { changedInfo } from '/pages/core/info';
import { images } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import TimeSchedule from '/pages/Components/time-schedule/time-schedule.js';

export default function DesktopFooter(){
    return(
        <>
            <Head>
            </Head>
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
                            <iframe src={changedInfo.iframeMapLink} width="1500" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
        </>
    )
}