import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonFullListOfOurServices from '/pages/Components/buttons/button-full-list-of-our-services.js';
import { NavDropdown } from 'react-bootstrap';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { menu } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';
import { changedInfo } from '/pages/core/info';



export default function DesktopNavBar(){
    return(
        <>
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
        </>
    )
}