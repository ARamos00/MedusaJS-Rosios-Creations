import Image from 'next/image'
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="relative h-[75vh] w-full border-b border-ui-border-base">
      <Image
        src="https://via.placeholder.com/1920x1080"
        alt="Placeholder Image"
        className="absolute inset-0 object-cover object-center"
        draggable={false}
        quality={75}
        sizes="100vw"
        fill
        priority
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6 bg-black bg-opacity-50">
        <Heading
          level="h1"
          className="text-3xl leading-10 text-white font-normal"
        >
          Welcome to Maria's Event Rentals
        </Heading>
        <Heading
          level="h2"
          className="text-3xl leading-10 text-gray-200 font-normal"
        >
          Transforming Events into Unforgettable Experiences
        </Heading>
      </div>
    </div>
  )
}

export default Hero
