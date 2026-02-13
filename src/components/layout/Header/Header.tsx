import './Header.scss'
import bgHeaderMobile from '../../../assets/images/bg-header-mobile.svg'
import bgHeaderDesktop from '../../../assets/images/bg-header-desktop.svg'

export default function Header() {
  return (
    <header className="header">
      <img 
        src={bgHeaderMobile} 
        alt="" 
        className="header__bg-mobile"
        aria-hidden="true"
      />
      <img 
        src={bgHeaderDesktop} 
        alt="" 
        className="header__bg-desktop"
        aria-hidden="true"
      />
    </header>
  )
}

