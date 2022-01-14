import React from 'react'
import HeaderComp from './Header'
import HeroSection from './Hero_section';
import SecNav from './SecNav';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <HeaderComp></HeaderComp>
      <HeroSection></HeroSection>
      <SecNav></SecNav>
      <Outlet />
    </>
  )
}

export default Layout
