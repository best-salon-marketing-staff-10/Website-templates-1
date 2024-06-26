import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonFullListOfOurServices(){
    const content = "Full list of our services";

    return(
        <>
            <Link legacyBehavior href={button.button5LinkTo}>
                    <div className="button-5">
                        {button.button5Content}
                    </div>
                </Link>
        </>
    )
}