import { imageAlt } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import { images } from '/pages/core/info';

export default function NhanManh3(){
    return(
        <>
            <div className="nhan-manh-3-background">
                <div className="nhan-manh-content">
                    <h2 className="nhan-manh-content-header">
                            {pageContent.section6Heading}
                    </h2>
                    <div className="nhan-manh-3-images">
                            <img className="nhan-manh-3-image-1" alt={imageAlt.section6Image1Alt} src={images.section6Image1} />
                            <img className="nhan-manh-3-image-2" src={images.section6Image2} />
                        </div>
                    <div className="nhan-manh-content-wrapper">
                       
                        <div className="nhan-manh-content-description">
                            {pageContent.section6Description}
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}