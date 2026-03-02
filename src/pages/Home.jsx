import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import DashboardPreview from "../components/DashboardPreview"
import Integrations from "../components/Integrations"
import Pricing from "../components/Pricing"
import BlogSection from "../components/BlogSection"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
    <Navbar />
      <Hero />
      <DashboardPreview />
      <Integrations />
      <Pricing />
      <BlogSection />
      <Footer />
    </>
  )
}

export default Home