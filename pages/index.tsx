import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ThemeToggle from '@/components/ThemeToggle'
import React from 'react'

function LandingPage() {
  return (
    <div>
      <Header />
      <h1>Welcome</h1>
      <p>The best website</p>
      <ThemeToggle />
      <Footer />
    </div>
  )
}

export default LandingPage