// rrd imports
import { Outlet } from 'react-router-dom'

// components
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <main>
      <Outlet /> {/* Routes go here */}
    </main>
    {/* Footer */}
    </>
  )
}

export default MainLayout
