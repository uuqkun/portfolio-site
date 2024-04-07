import { HeaderBg } from "../../Assets/Images";

const Header = () => {
  return (
    <div className="layout-container">
      <img src={HeaderBg} alt="Header background" className="absolute" />
        <header className="layout">
            Header
        </header>      
    </div>
  )
}

export default Header;