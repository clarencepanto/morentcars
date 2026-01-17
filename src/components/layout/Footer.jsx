import Logo from "../../assets/images/Logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="fcontainer">
        <section className="footer__intro">
          <img src={Logo} alt="Morrent Logo" />
          <p className="footer__missionstatement">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </section>
        <section className="footer__details">
          <div className="footer__details__about">
            <h2>About</h2>
            <div>
              <a href="">How it works</a>
              <a href="">Featured</a>
              <a href="">Partnership</a>
              <a href="">Business Relation</a>
            </div>
          </div>
          <div className="footer__details__socials">
            <h2>Socials</h2>
            <div>
              <a href="">Discord</a>
              <a href="">Instagram</a>
              <a href="">Twitter</a>
              <a href="">Facebook</a>
            </div>
          </div>
          <div className="footer__details__community">
            <h2>Community</h2>
            <div>
              <a href="">Events</a>
              <a href="">Blog</a>
              <a href="">Podcast</a>
              <a href="">Invite a friend</a>
            </div>
          </div>
        </section>
      </div>

      <section className="footer__pripoli">
        <h4>Privacy & Policy</h4>
        <h4>Terms & Condition</h4>
      </section>
      <h4 className="footer__copyright">© 2022 MORENT. All rights reserved</h4>
    </footer>
  );
}

export default Footer;
