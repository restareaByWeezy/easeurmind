import Logo from 'assets/svg/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { styled } from 'styles/globalStitches'

import Text from '../Text'

const Header = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <CustomHeader>
      <Navbar>
        <LogoButton onClick={handleClick}>
          <Logo />
        </LogoButton>
        <Text size="h2" weight="bold" color="orange">
          EaseEaseEase
        </Text>
        <Link href="/">Main</Link>
        <Link href="/blog">Blog</Link>
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

const LogoButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
})
