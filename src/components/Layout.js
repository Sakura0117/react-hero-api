
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <section className="h-screen">
    <Header />
<main className="container mx-auto">
  { children }
</main>
<Footer />
</section>
)

export default Layout