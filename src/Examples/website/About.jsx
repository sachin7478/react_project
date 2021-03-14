import image2 from './images/img2.jpg';
import Common from  './Common'
export default function About() {
    return(<>
            <Common 
                title= "" 
                title2= "SnAPI trading platform is designed for traders who dont want to spend most of their precious time sticking to the computer monitors to execute their trades." 
                title3= ""
                url="/contact"
                btnName="Contact us"
                image= {image2}
            />
    </>)
}