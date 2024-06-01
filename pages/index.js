import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import DesktopTopBar from '/pages/Components/nav-bar/desktop-top-bar.js'
import MobileTopBar from '/pages/Components/nav-bar/mobile-top-bar.js'
import TabletTopBar from '/pages/Components/nav-bar/tablet-top-bar'
import DesktopNavBar from '/pages/Components/nav-bar/desktop-nav-bar.js';
import TabletNavBar from '/pages/Components/nav-bar/tablet-nav-bar.js';
import MobileNavBar from '/pages/Components/nav-bar/mobile-nav-bar.js';
import MobileBottomNavBar from '/pages/Components/nav-bar/mobile-bottom-nav-bar.js'
import DesktopContent from '/pages/Components/home-page/desktop-content.js'
import MobileContent from '/pages/Components/home-page/mobile-content.js'
import TabletContent from '/pages/Components/home-page/tablet-content'
import DesktopFooter from '/pages/Components/footer/desktop-footer'
import MobileFooter from '/pages/Components/footer/mobile-footer'
import TabletFooter from '/pages/Components/footer/tablet-footer'

import { schemaData } from '/pages/core/info';
import { headerInput } from '/pages/core/info';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonFullListOfOurServices from '/pages/Components/buttons/button-full-list-of-our-services.js';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { menu } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';

export default function Home() {
  //Không sử dụng chuột phải
  if (process.browser){
  document.oncontextmenu = new Function("return false;");
  }

  /*
   <div className="page-container">
            <div className="page-nav-bar">
              <div className="page-top-bar">
                <div className="page-mobile-top-bar">
                </div>
                <div className="page-tablet-top-bar">
                  <TabletTopBar />
                </div>
                <div className="page-desktop-top-bar">
                  <DesktopTopBar />
                </div>
              </div>
              <div className="page-nav-bar">
                <div className="page-mobile-nav-bar">
                  <MobileNavBar />
                </div>
                <div className="page-tablet-nav-bar">
                  <TabletNavBar />
                </div>
                <div className="page-desktop-nav-bar">
                  <DesktopNavBar />
                </div>
              </div>
              <div className="page-bottom-nav-bar">
                <div className="mobile-bottom-nav-bar">
                  <MobileBottomNavBar />
                </div>
              </div>
            </div>
            <div className="page-content">
              <div className="page-desktop-content">
                  <DesktopContent />
              </div>
              <div className="page-mobile-content">
                <MobileContent />
              </div>
              <div className="page-tablet-content">
                <TabletContent />
              </div>
            </div>
            <div className="page-footer">
              <div className="page-desktop-footer">
                <DesktopFooter />
              </div>
              <div className="page-mobile-footer">
                <MobileFooter />
              </div>
              <div className="page-tablet-footer">
                <TabletFooter />
              </div>
            </div>  
          </div>
          */
  return (
    <>
        <Head>
          <title>{headerInput.headerTitle}</title>
          <meta name="description" 
            content= {headerInput.metaDescription} />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <link rel="icon" href={headerInput.relIcon} />
          <link rel="canonical" href={headerInput.relCanonical} />
          <link rel="alternate" hrefLang="en" href={headerInput.relCanonical} />
          <link rel="alternate" href={headerInput.relCanonical} hrefLang="x-default" />

          <meta name="geo.position" content={headerInput.metaGeoPosition} />
          <meta name="geo.placename" content={headerInput.metaGeoPlaceName} />
          <meta name="geo.region" content={headerInput.metaGeoRegion} />
          
          <meta property="og:site_name" content={headerInput.metaOgSiteName} />
          <meta property="og:locale" content={headerInput.metaOgLocale} />

          <meta property='og:title' content={headerInput.metaOgTitle} />
          <meta property='og:image' content={headerInput.metaOgImage} />
          <meta property='og:description' 
            content={headerInput.metaDescription} />
          <meta property='og:url' content={headerInput.relCanonical} />
          <meta property='og:image:width' content={headerInput.metaOgImageWidth} />
          <meta property='og:image:height' content={headerInput.metaOgImageHeight} />
          <meta property="og:type" content='website' />

          
          <meta name="google-site-verification" content={headerInput.metaGoogleSiteVerification} />

          <meta name="google-site-verification" content="8PY9C4tyFxx-C0abTprXegCqjI9VHTxWzt57enQ1cNc" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        </Head>
        <Navbar bg="" expand={false} className="customer-navbar">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbar"
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
    </>
  );
}
