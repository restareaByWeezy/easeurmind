import Header from 'components/common/_Layout/Header'
import HomeLayout from 'components/common/_Layout/Layout'

import HomePageContent from './_fragments/HomePageContent'

const HomePage = () => {
  return <HomeLayout header={<Header />} content={<HomePageContent />} />
}

export default HomePage
