import React from 'react'
import { Navbar, About, Pricing, Contact } from '../components'

export default function Home () {
    return (
        <div>
            <Navbar />
            <div>Home</div>
            <About />
            <Pricing />
            <Contact />
        </div>
    )
}