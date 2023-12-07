"use client";

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import {useEffect} from "react";
import {getAccessToken} from "@/app/api/hello/route";
import {listEndpoints} from "@/app/api/vertexAi/route";
import {fileToBase64} from "@/app/api/vertexAi/toJsonImage";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  )
}
