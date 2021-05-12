import React from 'react';
import "./Footer.css"
import overwatchFooter from "../../assets/img/fancy-logo.png"

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-left">
                    {/* <div className="footer-img1"> */}
                    <img className="footer-img1" src="https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt138432be14780f67/5dd4935d0386806c8e4e1001/Buy-Footer-Art.png?auto=webp"/>

                    {/* </div> */}
                </div>
                <div className="footer-right">
                    <div className="footer-info-game">
                        <h2 className="footer-h2">ВСТУПАЙТЕ В БИТВУ ЗА БУДУЩЕЕ!</h2>
                        <h5 className="footer-h5">Сражайтесь за будущее в непревзойденном командном шутере!</h5>
                        <button className="section1-moreBtn">ПРИОБРЕСТИ</button>
                    </div>
                </div>
            </div>
            <div className="footer-1">
                <div className="footer-background">
                    <h4 className="footer-1-h4">БУДЬТЕ НА СВЯЗИ!</h4>
                    <div className="footer-icons">
                        <button className="footer-icon-btn"><i class="fab fa-facebook-f"></i></button>
                        <button className="footer-icon-btn"><i class="fab fa-twitter"></i></button>
                        <button className="footer-icon-btn"><i class="fab fa-youtube"></i></button>
                        <button className="footer-icon-btn"><i class="fab fa-instagram"></i></button>
                    </div>  
                </div>
            </div>
            <div className="footer-2">
                <div className="footer-logo">
                    <img className="overwatchFooter" src={overwatchFooter}/>
                </div>
                <div className="footer-h">
                    <a href="#" className="footer-hr1">ВАКАНСИИ</a>
                    <a href="#" className="footer-hr">О КОМПАНИИ</a>
                    <a href="#" className="footer-hr">ПОДДЕРЖКА</a>
                    <a href="#" className="footer-hr">ОТКРЫТЬ ЗАПРОС</a>
                    <a href="#" className="footer-hr">ПРЕСС-РЕЛИЗЫ</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;