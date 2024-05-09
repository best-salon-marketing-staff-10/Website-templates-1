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
import { serviceCategory } from '/pages/core/info';

export default function MobileContent(){
    return(
        <>
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
                    <NhanManh2 />
                </div>
                <div className="dong-vien-6">
                    <NhanManh3 />
                </div>
                <div className="dong-vien-7">
                    <NhanManh4 />
                </div>
                <div className="location-time-schedule">
                    <div className="location">
                    </div>
                    <div className="time-schedule">
                        <TimeSchedule />
                    </div>
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
                <div>
                    <CustomerReview />
                </div>
            </div>
            
        </>
    )
}