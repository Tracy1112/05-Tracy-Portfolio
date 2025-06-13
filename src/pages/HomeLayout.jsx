import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar, Loading } from '../components'
import '../layout.css'

const HomeLayout = () => {
  const navigation = useNavigation()
  const ispageLoading = navigation.state === 'loading'
  return (
    <div className="layout">
      <Navbar />
      {ispageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-6 lg:py-10">
          <Outlet />
        </section>
      )}
    </div>
  )
}

export default HomeLayout
