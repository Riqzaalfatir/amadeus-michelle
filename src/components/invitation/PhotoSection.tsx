import Image from "next/image"
import Couple from "@/assets/FotoCouple.png"

const PhotoSection = () => {
  return (
    <section className="w-full">
        <Image
           src={Couple}
           alt="Couple"
           className="w-full h-auto object-contain"
           priority
        />
    </section>
  )
}

export default PhotoSection