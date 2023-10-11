function NavItem({ planets, setIsSelected }) {
  return planets.map((el) => (
    <button key={el.name} onClick={()=> setIsSelected(el.id)} className="nav-link">
      <h3>{el.name}</h3>
    </button>
  ));
}

export default NavItem;
