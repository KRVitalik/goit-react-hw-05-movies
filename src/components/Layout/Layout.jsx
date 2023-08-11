import Header from 'components/Header/Header'
import Spinner from 'components/Spiner/Spinner'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <>
      <Header />
      <Suspense fallback={<Spinner/>}>
                
          <Outlet />
      </Suspense>
      </>
  )
}

export default Layout