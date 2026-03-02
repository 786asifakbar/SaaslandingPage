import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import DashboardPreview from "../components/DashboardPreview"
import Features from "../components/Features"
import Integrations from "../components/Integrations"
import Pricing from "../components/Pricing"
import BlogSection from "../components/BlogSection"
import Footer from "../components/Footer"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
const Home = () => {
  return (
    <>
    <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <Integrations />
      <Pricing />
      <BlogSection />
      <Stats />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home