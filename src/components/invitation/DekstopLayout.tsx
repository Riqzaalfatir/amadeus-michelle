"use client"

import { useEffect } from "react"
import AOS from "aos"
import Image from "next/image"
import HeroKiri from "@/assets/HeroKiri.png"
import MobileContainer from "./MobileContainer"
import CoupleSection from "./CoupleSection"
import WaktuSection from "./WaktuSection"
import LokasiSection from "./LokasiSection"
import PhotoSection from "./PhotoSection"
import DresscodeSection from "./DresscodeSection"
import ReservasiSection from "./ReservasiSection"
import PesanSection from "./PesanSection"
import TerimakasihSection from "./TerimakasihSection"
import FooterSection from "./FooterSection"

export default function DekstopLayout() {

  useEffect(() => {
    const container = document.querySelector(".scroll-container")

    const handleScroll = () => {
      AOS.refresh()
    }

    container?.addEventListener("scroll", handleScroll)

    return () => {
      container?.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex h-screen overflow-hidden bg-black">

      <div className="hidden xl:block flex-1 relative">
        <Image
          src={HeroKiri}
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
      </div>

     <div className="w-full lg:w-[420px] h-screen overflow-y-auto bg-[#EFE6D8]">
        <MobileContainer />
        <CoupleSection />
        <WaktuSection />
        <LokasiSection />
        <PhotoSection />
        <DresscodeSection />
        <ReservasiSection />
        <PesanSection />
        <TerimakasihSection />
        <FooterSection />
      </div>

    </div>
  )
}