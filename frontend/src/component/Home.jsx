import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import ImpactStats from './ImpactStats'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import FeaturedPets from './FeaturedPets'
import ComprehensiveCare from './ComprehensiveCare'
import Testimonials from './Testimonials'
import TeamSection from './TeamSection'
import AppointmentForm from './AppointmentForm'
import SavePetsSection from './SavePetsSection'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ImpactStats/>
      <HeroSection/>
      <ServicesSection/>
      <FeaturedPets/>
      <ComprehensiveCare/>
      <Testimonials/>
      <TeamSection/>
      <AppointmentForm/>
      <SavePetsSection/>
      <Footer/>
    </div>
  )
}
