import Header from 'components/common/_Layouts/Header'
import HomeLayout from 'components/common/_Layouts/Layout'
import HomePageContent from './_fragments/HomePageContent'

const HomePage = () => {
  return <HomeLayout header={<Header />} content={<HomePageContent />} />
}

export default HomePage
