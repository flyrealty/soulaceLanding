import React from 'react'
import Hero from "../components/Hero/Hero"
import Community from "../components/Community/Community"
import Pricing from "../components/Pricing/Pricing"
import Location from "../components/Location/Location"

function Home() {
  return (
    <div>
        <Hero />
        <Community />
        <Pricing />
        <Location />
    </div>
  )
}

export default Home