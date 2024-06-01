import Link from 'next/link';
import { button } from '/pages/core/info';

export default function Button2(){
    return(
        <>  
            <Link legacyBehavior href={button.button2LinkTo}>
                <div className="button-2">
                    {button.button2Content}
                </div>
            </Link>
        </>
    )
}