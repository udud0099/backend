import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import FavoriteButton from './FavoriteButton'
import CartIcon from './CartIcon'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <header className='border-b py-3'>
        <Container className='flex items-center justify-between '>
          <div>
          <MobileMenu />
          <Logo />
          </div>
          <HeaderMenu />
          <div className='flex items-center gap-4'>
            <SearchBar />
            <CartIcon />
            <FavoriteButton />
            <SignIn />
          </div> 
        </Container>
    </header>
  )
}

export default Header