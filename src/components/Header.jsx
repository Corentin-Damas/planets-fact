import { usePlanet } from "../data/AppContext";
import NavItem from "./NavItem";

function Header({setIsSelected}) {
  const { planets, isLoading } = usePlanet();

  return (
    <>
      <header className="header">
        <h1 className="title-logo">The planets</h1>
        <nav className="nav-bar">
          {!isLoading && <NavItem planets={planets} setIsSelected={setIsSelected} />}
        </nav>
      </header>
      <hr />
    </>
  );
}

export default Header;
