import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav__container">
      <section className="nav__logoContainer">
        <img
          src="../images/troll_face.png"
          alt="troll face"
          className="nav__logo"
        />
        <h2 className="nav__logoHeaderLeft">Meme Generator</h2>
      </section>
      <h3 className="nav__logoHeaderRight">React Course - Project 3</h3>
    </nav>
  );
}
