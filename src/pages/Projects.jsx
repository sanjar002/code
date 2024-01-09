import React from "react";
import "../assets/style/Projects.scss"
import "../assets/style/Home.scss";
import contentCardImg from "../assets/media/contentCard.svg";


const Projects = () => {
  return (
    <>
    <section className="section">
      <div className="container">
        <div className="section-wrapper">
          <h1 className="logo-pro-text">Проекты</h1>
          <p className="logo-pro">Проекты, разработанные нашей командой. Мы внесли свой профессионализм и творческий подход в каждый из них.</p>
          <div className="pro-flex">
          <div className="content__card_pro">
              <h1 className="card_logo">ОкурМэн</h1>
              <p className="card_text">
                ОкурМэн - это веб-сайт где можете узнать информацию про курсы в
                сфере проммирование
              </p>
              <div className="card_img_flex">
                <img
                  style={{ width: "24px" }}
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS61vKK67UMkrtp6zVnjqVmBvW2TbR5PJTIermbAsyQHkavb5FS"
                  alt=""
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D0jwOFY9FYS5QKirMcPFAJxdQrPMyCf3YNVypUzVm5GI8SOI"
                  alt=""
                />
                <img
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLHLTpGcTkgmXjQLARRkYrweUbh27jxuGvm5GluPCbJ7Cb3-dS"
                  alt=""
                />
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSSQLaJn09xYtPiac1Hhz2D5ritA6IZkNUuZKicSs5SZjHxWfm"
                  alt=""
                />
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7HdlK1H6OcWBx920WajBr1LnKiarnoMeIuIVU54a_S_qOHJGM"
                  alt=""
                />
              </div>
              <a href="https://www.instagram.com/okurmen_it/?next=%2Fp%2FCMXMViXrb6J%2F&hl=bg">
                <img className="cardimg" src={contentCardImg} alt="" />
                <button className="card__btn">
                  Подробное <span>→</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
};

export default Projects;
