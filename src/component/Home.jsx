import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__backgroundImage"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="3489245"
            title="tv"
            price={38000}
            rating={4}
            image="https://m.media-amazon.com/images/I/518sTcK7UGL._AC_UF226,226_FMjpg_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4739587"
            title="phone"
            price={14999}
            rating={4}
            image="https://m.media-amazon.com/images/I/41IcuNkyrdL._AC_UF226,226_FMjpg_.jpg"
          />
          <Product
            id="8294832"
            title="laptop"
            price={47999}
            rating={5}
            image="https://m.media-amazon.com/images/I/418A-WSZT9L._AC_UF226,226_FMjpg_.jpg"
          />
          <Product
            id="438292389"
            title="phone"
            price={32299}
            rating={5}
            image="https://m.media-amazon.com/images/I/51hvBtWe0IL._AC_UF226,226_FMjpg_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3847538573"
            title="home theater"
            price={12990}
            rating={5}
            image="https://m.media-amazon.com/images/I/316QXV5qd6L._AC_UF226,226_FMjpg_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
