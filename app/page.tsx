"use client"

import NavBar from "./components/TopNavBar"
import BottomNavBar from "./components/BottomNavBar"
import { Divider } from "@mui/material"


const Home = () => {
  return (
    <main >
      <NavBar />
      <Divider />
      <BottomNavBar />
    </main>
  )
}

export default Home
