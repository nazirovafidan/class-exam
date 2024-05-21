import { useEffect, useState } from "react";
import "./home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAll } from "../../services/requests";
import { endpoints } from "../../services/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Home = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    getAll(endpoints.foods).then((res) => {
      console.log("then");
      if (res.data && Array.isArray(res.data.data)) {
        setFoods(res.data.data);
      } else {
        console.error("Invalid data format:", res.data);
      }
    });
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="container-hero">
          <div className="content">
            <div className="content-inner">
              <div className="title">Welcome To EatWell</div>
              <div className="text">
                Come and eat well with our delicious & healthy foods.
              </div>
              <div className="button">
                <button>Reservation</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="welcome">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="text-content">
                <div className="title">OUR STORY</div>
                <div className="sub-title">Welcome</div>
                <div className="text">
                  <span>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </span>
                  <span>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </span>
                </div>
                <div className="button">
                  <button>Learn more about us</button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="image">
                <img
                  src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offers">
        <div className="container">
          <div className="row">
            <div className="content-text">
              <div className="title">OUR OFFERS</div>
              <div className="sub-title">Our Offer This Summer</div>
              <div className="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
            </div>
            <div className="cards">
              <Swiper  style={{
  "--swiper-pagination-color": "#FFBA08",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "10px",
  "--swiper-pagination-bullet-horizontal-gap": "6px"
}}
                slidesPerView={3}
                spaceBetween={10}
                pagination={{ 
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {foods &&
                  foods.map((food) => {
                    return (
                      <SwiperSlide key={food._id}>
                        <div className="card">
                          <div className="img">
                            <img src={food.image} alt="" />
                          </div>
                          <div className="card-content">
                          <div className="card-text-content">
                            <div className="price">
                              <span>${food.price}</span>
                            </div>
                            <div className="title">{food.title}</div>
                            <div className="description">{food.description}</div>
                          </div>
                          <div className="button">
                            <button>Order Now!</button>
                          </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      

    </div>
  );
};

export default Home;
