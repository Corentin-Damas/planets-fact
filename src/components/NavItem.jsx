function NavItem({ planets, setIsSelected, currently, setOpenMenu }) {

function handle(id){
  setIsSelected(id)
  setOpenMenu(false)

}

  return planets.map((el) => (
    <button
      key={el.name}
      onClick={() => handle(el.id)}
      className={`nav-link ${el.name === currently.name? `u-nav-active-${el.name}`: ""}`}
    >
      <h3>{el.name}</h3>
    </button>
  ));
}

export default NavItem;
