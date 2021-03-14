import TimelineSharpIcon from '@material-ui/icons/TimelineSharp';
import imagePath from './images/trading.jpg';
					
let ArrayCards=	[
                    {
                    img:{imagePath},
                    icon:TimelineSharpIcon,
                    title:"Safe and SecureSafe",
                    desc:"Safe and Secure platform as data is fully encrypted. Built on most advance and reliable technology by snAPI team"
                    },
                    {
                    img:{imagePath},
                    icon:TimelineSharpIcon,
                    title:"Server/cloud Based",
                    desc:"As the alerts can be delivered in a matter of miliseconds ,you dont need to be connected to some pricy and fast internet connections for using snAPI.in server based trading system."
                    },
                    {
                    img:{imagePath},
                    icon:TimelineSharpIcon,
                    title:"Ease Of Use",
                    desc:"No matter you have computer , laptop , tablet, even on mobile phones , you can easily manage your autmated trading setup."
                    },
                    {
                    img:{imagePath},
                    icon:TimelineSharpIcon,
                    title:"Order Management",
                    desc:"One false order can swallow big amount from your account. Order management is very essential when you are creating bot. On snAPI , there is no chance of False orders or trades. "
                    },
                    {
                    img:{imagePath},
                    icon:TimelineSharpIcon,
                    title:"Save Slippage Cost",
                    desc:"Slippage costs will dramatically affect your overall rate of return if you’re not careful. Trades are excecuted in a matter of second, hence you will not have to worry about slippage cost."
                    },
                    {
                    img:{imagePath},
                    icon:TimelineSharpIcon,
                    title:"Fully Automted",
                    desc:"Just deploy your strategies/alerts in tradingview and let snAPI work for you. AI will automatically sqaure off your intraday orders on closing time."
                    },
                    {
                    img:{imagePath},
                    icon:TimelineSharpIcon,
                    title:"Notifications on Telegram",
                    desc:"No matter where you are, get instant updates on <a href='http://t.me/snapi_trading_bot' target='_blank'>telegram bot</a>, without any delay.Get your orders,funds,positions information on telegram. You can SqaureOff positions. Switch On/Off your bot from telegram."
                    },
                    {
                    img:{imagePath},
                    icon:TimelineSharpIcon,
                    title:"Easy Integration",
                    desc:"Very much easy integration, Easy to handle. Dashboard is so easy that anyone can understand within minutes and start growing wealth."
                    },
                ]
    const MyCard = ( prop ) => {
        console.log(prop.current.img);
        return(<>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch my-5 mb-lg-0">
                    <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        {/* {prop.current.icon} */}
                        <div className=""><img src={prop.current.img.imagePath} className="icon-image" />
                        </div>
                        <h4 className="title"><a href="">{prop.current.title}</a></h4>
                        <p className="description">{prop.current.desc}</p>
                    </div>
                </div>
        </>);
    }
    export default ArrayCards;
    export {MyCard};
						
					
