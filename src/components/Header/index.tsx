import { HeaderContainer } from './styles'

import CoffeeLogo from '../../assets/CoffeeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeeLogo} alt="" />
      <nav>
        <NavLink to="/" title="Location">
          <MapPin size={32} />
        </NavLink>
        <NavLink to="/" title="Checkout">
          <ShoppingCart size={32} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
