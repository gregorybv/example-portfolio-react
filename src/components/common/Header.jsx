import {Menu} from "@mui/icons-material"
import React, {useState} from "react"
import {Link} from "react-router-dom"
import {navlink} from "../data/data"
import logo from "../data/images/logo2.png"

export const Header = () => {
  const [responsive, setResponsive] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container flexsb'>

          <img className='header__logo' src={logo} alt='logo'/>

          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <Link to={links.url} key={i} data-aos='zoom-in-left'>
                {links.text}
              </Link>
            ))}
          </div>
          <button className='header__toggle' onClick={() => setResponsive(!responsive)}>
            <Menu className='icon'/>
          </button>
        </div>
      </header>
    </>
  )
}
