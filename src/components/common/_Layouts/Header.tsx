import { styled } from 'styles/globalStitches'
import Logo from 'assets/svg/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <CustomHeader>
      <Navbar>
        <button onClick={handleClick}>
          <Logo />
        </button>
        <Link href="/cart">CART</Link>
        <Link href="/products">PRODUCTS</Link>
      </Navbar>
    </CustomHeader>
  )
}

export default Header

// STYLE ////////////////////

const CustomHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  padding: '15px 20px',
  boxShadow: '$boxShadow',
})

const Navbar = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',

  '& a': {
    fontWeight: '$semiBold',
    padding: '15px',

    '&:hover': {
      color: '$primary',
    },
  },
})
