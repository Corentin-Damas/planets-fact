function NavItem({ planets, setIsSelected, currently }) {
  console.log("from navItem", currently);

  return planets.map((el) => (
    <button
      key={el.name}
      onClick={() => setIsSelected(el.id)}
      className={`nav-link ${el.name === currently.name? `u-nav-active-${el.name}`: ""}`}
    >
      <h3>{el.name}</h3>
    </button>
  ));
}

export default NavItem;
