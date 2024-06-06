import Head from 'next/head';
import DesktopContent from '/pages/Components/home-page/desktop-content.js';
import MobileContent from '/pages/Components/home-page/mobile-content.js';
import TabletContent from '/pages/Components/home-page/tablet-content.js';

export default function Home() {
  //Không sử dụng chuột phải
  if (process.browser){
  document.oncontextmenu = new Function("return false;");
  }

  /*
   
          */
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
  );
}
