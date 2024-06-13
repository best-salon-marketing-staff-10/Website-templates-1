import Link from 'next/link';
import { processedInfo } from '/pages/core/info';
import { menu } from '/pages/core/info';

export default function DesktopTopBar(){

    return(
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
        </>
    )
}