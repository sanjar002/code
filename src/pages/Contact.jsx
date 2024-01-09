// import React from "react";
import "../assets/style/Contact.scss";
// icons
// import { FaInstagram } from "react-icons/fa6";
// images
import Telegram from "../assets/media/telegram.png";
import Instagram from "../assets/media/insta.png";
import Whatsapp from "../assets/media/whatsApp.png";
import Phone from "../assets/media/phone.png";
import contentImage from '../assets/media/image12.png'
// import "../assets/style/style.css"
const Contact = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="leftContent">
              <h1>Свяжитесь с нами!</h1>
              <p>
                Готовы помочь воплотить ваши идеи в жизнь! <br /> Обеспечим ваш
                бизнес успешным онлайн <br />
                -присутствием. Заполните форму или свяжитесь <br /> с нами –
                обсудим решения для вашей компании.
              </p>
              <div className="icons">
                <a href="https://t.me/+996500443423" className="iconFlex">
                  <img src={Telegram} alt="" />
                  <p>@codemoon.studio</p>
                </a>
                <a href="https://www.instagram.com/codemoon.studio?igsh=MTkxYnByMnZhOTRjdA==" className="iconFlex">
                  <img src={Instagram} alt="" />
                  <p>codemoon.studio</p>
                </a>
                <a href="https://wa.me/+996702038656" className="iconFlex">
                  <img src={Whatsapp} alt="" />
                  <p>+996702038656</p>
                </a>
                <a href="tel:+996500443423" className="iconFlex">
                  <img src={Phone} alt="" />
                  <p>+996500443423</p>
                </a>
              </div>
            </div>
            <form action="https://formsubmit.co/sanjarkairatkeldiev@gmail.com" method="POST" className="rightContent">
            <input type="text" name="name" placeholder="Имя" />
            <input type="email" name="email" placeholder="E-mail" />
            <input type="text" name="phone" placeholder="Номер телефона" />
          
              <input type="name" name="telegram" placeholder="Телеграм" />
              <button type='submit'>Отправить</button>
            </form>
            <div >
       
            </div>

          </div>
          
          <div className="contentimage">
          <hr />
            <img src={contentImage} alt="" />
          <hr />
          </div>
        </div>
        
      </section>
    </>
  );
};



export default Contact;

