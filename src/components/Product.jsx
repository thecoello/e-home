import { useGSAP } from "@gsap/react"
import gsap, { Linear } from "gsap"
import { Expo } from "gsap"
import { useRef, useState } from "react"


function Product({ image }) {
  const { contextSafe } = useGSAP()

  const btnOptions = useRef()
  const product = useRef()

  const mouseMove = contextSafe((event) => {
    let yPosition = event.clientY - product.current.getBoundingClientRect().top
    const height = product.current.getBoundingClientRect().height

    if ((yPosition >= (height - height + 30)) && yPosition <= (height - 30)) {
      gsap.to(btnOptions.current, 0, { overwrite: 'auto', y: yPosition, opacity: 1, ease: Expo.easeOut })
    } else {
      gsap.to(btnOptions.current, 1, { opacity: 0, ease: Expo.easeOut });
    }

  })

  const mouseLeave = contextSafe((event) => {
    gsap.to(btnOptions.current, 1, { opacity: 0, ease: Expo.easeOut });
  })

  const exploreEnter = contextSafe(({ target }) => {
    gsap.to(target, 0.5, { xPercent: 15, background: '#000000', color: '#ffffff', ease: Expo.easeOut });
  })

  const exploreLeave = contextSafe(({ target }) => {
    gsap.to(target, 0.5, { xPercent: 0, background: 'none', color: '#000000', ease: Expo.easeOut });
  })

  const addToCartEnter = contextSafe(({ target }) => {
    gsap.to(target, 0.5, { xPercent: -15, background: '#000000', color: '#ffffff', ease: Expo.easeOut });
  })

  const addToCartLeave = contextSafe(({ target }) => {
    gsap.to(target, 0.5, { xPercent: 0, background: 'none', color: '#000000', ease: Expo.easeOut });
  })

  return (
    <div className="w-full cursor-pointer overflow-hidden">
      <div ref={product} onMouseMove={mouseMove} onMouseLeave={mouseLeave} className="overflow-hidden relative m-1">

        <div ref={btnOptions} className="absolute z-10 flex w-full justify-between -top-3 left-0 opacity-0 max-md:hidden">
          <div onMouseEnter={exploreEnter} onMouseLeave={exploreLeave} className="p-1 w-1/3 text-black flex justify-center items-center uppercase text-sm cursor-pointer">
            Explore
          </div>
          <div onMouseEnter={addToCartEnter} onMouseLeave={addToCartLeave} className="p-1 w-1/3 text-black flex justify-center items-center uppercase text-sm cursor-pointer">
            Add to cart
          </div>
        </div>

        <img className="object-cover object-bottom w-full h-[70vh]" src={image} />

      </div>
      <div className="mt-5 mb-5 pl-5 pr-5 text-base uppercase flex justify-between flex-col">
        <div className="flex w-100">
          <div className="w-[80%]">
            <span className="text-[0.8rem]">Product Name / </span>
            <span className="text-[0.6rem]">Product category</span>
          </div>
          <div className="w-[20%] flex justify-end">
            <span className="text-base text-black flex justify-center items-center">30€ </span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Product
