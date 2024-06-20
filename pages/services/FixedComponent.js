import React, { useEffect, useState } from 'react';
import styles from '/pages/_app.js';
import Link from 'next/link';
import { serviceCategory } from '/pages/core/info';

const FixedComponent = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.fixedComponent} ${isFixed ? styles.fixed : ''}`}>
        <div className="service-menu">
            <div className="service-header-menu">
                <h5>
                    Touch Category to Qyickly view
                </h5>
            </div>
            <div className="service-menu-list">
                <div className="service-list">
                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory1}>
                        <div className="service-list-1">
                            {serviceCategory.serviceCategory1}
                        </div>
                    </Link>
                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory2}>
                        <div className="service-list-2">
                            {serviceCategory.serviceCategory2}
                        </div>
                    </Link>
                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory3}>
                        <div className="service-list-3">
                            {serviceCategory.serviceCategory3}
                        </div>
                    </Link>
                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory4}>
                        <div className="service-list-4">
                            {serviceCategory.serviceCategory4}
                        </div>
                    </Link>
                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory5}>
                        <div className="service-list-5">
                            {serviceCategory.serviceCategory5}
                        </div>
                    </Link>
                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory6}>
                        <div className="service-list-6">
                            {serviceCategory.serviceCategory6}
                        </div>
                    </Link>
                    <Link legacyBehavior href={serviceCategory.mobileLinkToServiceCategory7}>
                        <div className="service-list-7">
                            {serviceCategory.serviceCategory7}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default FixedComponent;