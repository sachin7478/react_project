import './aos.css';
import ArrayCards,{MyCard} from './ArrayCards';
export default function Features() {
    console.log(ArrayCards);
    return(
        <>
        <section id="features" className="services">
			<div className="container">

				<div className="section-title aos-init aos-animate" data-aos="fade-up">
					<h2>Features</h2>
				</div>
				<div className="row">
                    {
                        ArrayCards.map( ( currentCard, index ) =>{
                            return(<>
                                <MyCard key={index} current={currentCard}/>
                            </>);
                        } )
                    }
					
				</div>

				
			</div>
		</section>
        </>)
}