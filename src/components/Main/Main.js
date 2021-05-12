import React, { useContext, useEffect } from 'react';
import mainVideo from "../../assets/video/header.webm"
import owLogo from "../../assets/img/OW-logo.png"
import "./Main.css"
import ProductList from '../Products/ProductList';
import Sidebar from '../Side/Sidebar';
import { productsContext } from '../../Context/ProductsContext';
import { useHistory } from 'react-router';
import ProductCard from '../Products/ProductCard';

const Main = (props) => {
    const {prodData, getProductMain,paginationPages}=useContext(productsContext)
    const history= useHistory()
    useEffect(()=>{
        getProductMain()
    })
    
    return (
        <div>
            <div className="main-video">
                <video loop muted autoPlay className="fullscreen-bg__video">
                    <source className="mainVideo" src={mainVideo} type="video/webm" />
                </video>
                <div className="main-logo">
                    <img className="owLogo" src={owLogo} alt="ow-logo"/>
                </div>
            </div>
                <div className="section1">
                    <div className="container">
                        <div className="section1-main">
                            <div className="parent">
                                <h2 className="section1-h2">ПРАЗДНИЧНАЯ КОЛЛЕКЦИЯ</h2>
                                <p className="section1-news">Отметьте 30-летие компании Blizzard, создающей новые миры, исследующей неизведанные вселенные и разделяющей с игроками бессчетное множество потрясающих приключений, с праздничной коллекцией BlizzConline™! Проникнитесь духом годовщины! Устремитесь в бой, используя новые декоративные предметы, например легендарный облик «Рейнорхардт», эксклюзивный значок и граффити, и получите золотые контейнеры, чтобы пополнить коллекцию в Overwatch.*</p>
                                <p className="section1-infoNews">* Откройте эти предметы на консоли, приобретя коллекцию к 30-летию Blizzard®, уже поступившую в продажу в магазинах платформ-партнеров. Щелкните, чтобы узнать больше.</p>
                                <button className="section1-moreBtn">ПОДРОБНЕЕ</button>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="pop">
               < div className="container1">
            <div className="lol">
                {prodData.map((item)=>(
                    <ProductCard item={item} key={item.id}/>
                ))}
            </div>
               
        </div>
            </div>
        </div>
    );
};

export default Main;