function NavItem({ planets }) {
  return planets.map((el) => (
    <button key={el.name} className="nav-link">
      <h3>{el.name}</h3>
    </button>
  ));
}

export default NavItem;
