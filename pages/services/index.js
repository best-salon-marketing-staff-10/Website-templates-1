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
import MobileNavBar from '/pages/Components/nav-bar/mobile-nav-bar.js';
import DesktopNavBar from '/pages/Components/nav-bar/desktop-nav-bar.js';
import DesktopTopBar from '/pages/Components/nav-bar/desktop-top-bar.js';
import TabletNavBar from '/pages/Components/nav-bar/tablet-nav-bar.js';
import TabletTopBar from '/pages/Components/nav-bar/tablet-top-bar.js';
import MobileContent from '/pages/services/mobile-content.js';
import DesktopContent from '/pages/services/desktop-content.js';
import TabletContent from '/pages/services/tablet-content.js';

export default function Home() {

  if (process.browser){
    document.oncontextmenu = new Function("return false;");
  }
  return (
    <>
        <Head>
        </Head>
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
    </>
  )
}
