import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/FullWidthWithImage"
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
  return (
    <AnimationRevealPage>
      <Hero />
    </AnimationRevealPage>
  )
}

export default App