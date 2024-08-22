import { useGSAP } from "@gsap/react"
import gsap, { Linear } from "gsap"
import { Power2 } from "gsap"
import { useRef, useState } from "react"

function scrollAnimate(trigger, start, end, toggleActions, scrub, onEnter, onLeave, onEnterBack) {
  return gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
      toggleActions: toggleActions != false ? toggleActions : false,
      scrub: scrub != false ? scrub : false,
      onEnter: onEnter != false ? onEnter : false,
      onLeave: onLeave != false ? onLeave : false,
      onEnterBack: onEnterBack != false ? onEnterBack : false
    }
  })
}

function ImageParallax({image}) {
  const imageContainer = useRef()

  useGSAP(()=>{
    const parallax = scrollAnimate(imageContainer.current,"-50% center", "center center", false, true, false, false, false)
    parallax.fromTo(imageContainer.current.children,2,{yPercent: 0, scale: 1.2},{yPercent: 10, scale: 1, ease: Power2.easeOut})
  })

  return (
    <div ref={imageContainer} className="w-full overflow-hidden h-[100vh] max-md:h-[20vh] flex justify-center items-center">
      <img className="object-fill w-full relative" src={'https://images.unsplash.com/photo-1512972972907-6d71529c5e92?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
    </div>
  )
}

export default ImageParallax