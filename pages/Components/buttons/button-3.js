import Link from 'next/link';
import { button } from '/pages/core/info';

export default function Button3(){
    return(
        <>
            <Link legacyBehavior href={button.button3LinkTo}>
                <div className="button-3">
                    {button.button3Content}
                </div>
            </Link>
        </>
    )
}