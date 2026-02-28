import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import DashboardPreview from "../components/DashboardPreview"
import Integrations from "../components/Integrations"
import Pricing from "../components/Pricing"
import BlogSection from "../components/BlogSection"

const Home = () => {
  return (
    <>
    <Navbar />
      <Hero />
      <DashboardPreview />
      <Integrations />
      <Pricing />
      <BlogSection />
    </>
  )
}

export default Home