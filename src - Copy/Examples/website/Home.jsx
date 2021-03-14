import image1 from './images/img1.jpg';
import Common from  './Common'

export default function Home() {
    return(<>
            <Common 
                title= "API Bridge" 
                title2= "Cloud Based Algorithmic Trading" 
                title3= "Exchanges : NSE/BSE/MCX/CDS" 
                url="/features"
                btnName="Our Services"
                image= {image1}
            />
    </>)
}