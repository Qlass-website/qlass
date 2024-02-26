import Brands from '@/components/home-page/brands/Brands'
import ChildReadyToRoar from '@/components/home-page/child-ready-to-roar/ChildReadyToRoar'
import Hero from '@/components/home-page/hero/Hero'
import LearningChoice from '@/components/home-page/learning-choice/LearningChoice'
import OurResults from '@/components/home-page/our-results/OurResults'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <OurResults />
      <ChildReadyToRoar />
      <LearningChoice />
    </>
  )
}
