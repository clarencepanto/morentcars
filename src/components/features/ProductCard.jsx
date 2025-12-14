import Image from "../../assets/images/allnewrush.jpg";
import gasIcon from "../../assets/icons/gas-station.png";
import groupIcon from "../../assets/icons/profile-2user.png";
import carIcon from "../../assets/icons/Car.png";
import heart from "../../assets/icons/heart.png";

function ProductCard() {
  return (
    <section className="card productcard">
      <div className="productcard__header">
        <span>
          <h2 className="productcard__header__title">All New Rush</h2>
          <h4 className="productcard__header__subtitle">SUV</h4>
        </span>
        <span className="productcard__heart">
          <img src={heart} alt="heart" />
        </span>
      </div>
      <div className="productcard__info">
        <div>
          <div className="productcard__info__opacityeffect"></div>
          <img src={Image} alt="image" className="carimg" />
        </div>

        <div className="productcard__info__carstats">
          <div className="productcard__info__carstats__fuel">
            <img
              src={gasIcon}
              alt="fuel"
              className="productcard__info__carstats__fuel__icon"
            />
            <h5 className="productcard__info__carstats__fuel__text">70L</h5>
          </div>
          <div className="productcard__info__carstats__transmission">
            <img
              src={carIcon}
              alt="manual"
              className="productcard__info__carstats__transmission__icon"
            />
            <h5 className="productcard__info__carstats__transmission__text">
              Manual
            </h5>
          </div>
          <div className="productcard__info__carstats__capacity">
            <img
              src={groupIcon}
              alt="capacity"
              className="productcard__info__carstats__capacity__icon"
            />
            <h5 className="productcard__info__carstats__capacity__text">
              6 People
            </h5>
          </div>
        </div>
      </div>
      <div className="productcard__price">
        <h2 className="productcard__price__text">
          $72.00/ <span className="productcard__price__text--light">day</span>
        </h2>
        <h2 className="productcard__price__original">$80.00</h2>
      </div>
      <div className="productcard__btn__container">
        <button className="btn">Rent Now</button>
      </div>
    </section>
  );
}

export default ProductCard;
