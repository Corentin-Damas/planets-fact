import { usePlanet } from "../data/AppContext";
import NavItem from "./NavItem";

function Header() {
  const { planets, isLoading } = usePlanet();
  console.log(planets, isLoading);

  return (
    <>
    <header className="header">
      <h1 className="title-logo">The planets</h1>
      <nav className="nav-bar">
        {!isLoading && <NavItem planets={planets}/>}
      </nav>
    </header>
    <hr/>
    </>
  );
}

export default Header;

// {
//   artworks.map((art) => <GalleryItem art={art} key={art.id} />);
// }
