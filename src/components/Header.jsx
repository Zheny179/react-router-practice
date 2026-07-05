import { NavLink } from 'react-router-dom'

function Header() {
  const navItems = [
    { id: 1, link: '/', label: 'Home' },
    { id: 2, link: 'about', label: 'About' },
    { id: 3, link: 'search', label: 'Search' },
    { id: 4, link: 'login', label: 'Login' },
  ]

  return (
    <div>
      <header className="header">
        <nav className="header__nav">
          <ul className="header__list">
            { navItems.map(({ link, label, id }) => (
              <li
                className="header__item"
                key={ id }
              >
                <NavLink
                  className="header__link"
                  to={ link }
                  end={ link === '/react-router-practice/' }
                >
                  { label }
                </NavLink>
              </li>
            )) }
          </ul>
        </nav>
      </header>
      <hr />
    </div>
  )
}

export default Header
