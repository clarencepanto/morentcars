import hamburgerIcon from "../../assets/icons/menu.png";
import userIcon from "../../assets/icons/userimg.png";
import filterIcon from "../../assets/icons/filter.png";
import searchIcon from "../../assets/icons/search-normal.png";
import morentLogo from "../../assets/images/Logo.png";

function Header() {
  return (
    <header className="header">
      <section className="header__sidebarusericons">
        <img
          src={hamburgerIcon}
          alt="sidebar"
          className="header__sidebarusericons__sidebarimg"
        />
        <img
          src={userIcon}
          alt="usericon"
          className="header__sidebarusericons__userimg"
        />
      </section>
      <img src={morentLogo} alt="morentlogo" className="header__morentlogo" />
      <section className="header__searchiconfilter">
        <div className="header__searchiconfilter__container">
          <img
            src={searchIcon}
            alt="searchicon"
            className="header__searchiconfilter__searchiconimg"
          />
          <input
            type="text"
            className="header__searchiconfilter__searchinput"
            placeholder="Search something here"
          />
        </div>
        <div className="header__searchiconfilter__container--filter">
          <img
            src={filterIcon}
            alt=""
            className="header__searchiconfilter__filtericon"
          />
        </div>
      </section>
    </header>
  );
}

export default Header;
