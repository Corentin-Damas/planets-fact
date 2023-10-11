import { useState } from "react";
import { usePlanet } from "../data/AppContext";
import NavItem from "./NavItem";

function Header({ setIsSelected, isSelected }) {
  const { planets, isLoading } = usePlanet();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="header">
        <h1 className="title-logo">The planets</h1>
        <nav className={`nav-bar ${!openMenu ? "hide" : ""}`}>
          {!isLoading && (
            <NavItem
              planets={planets}
              currently={planets[isSelected - 1]}
              setIsSelected={setIsSelected}
              setOpenMenu ={setOpenMenu}
            />
          )}
        </nav>
        {!openMenu && (
          <div className="phone-menu" onClick={() => setOpenMenu(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
              <g fill="#FFF">
                <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
              </g>
            </svg>
          </div>
        )}
        {openMenu && (
          <div className="phone-menu" onClick={() => setOpenMenu(false)}>
            <div className="close">❌</div>
          </div>
        )}
      </header>
      <hr />
    </>
  );
}

export default Header;
