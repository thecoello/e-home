import { useGSAP } from "@gsap/react"
import gsap, { Expo, Power2 } from "gsap"
import { useState } from "react"
import SplitType from "split-type"

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

const images = [
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
]

function Slider() {

  const [sliderTotal, setSliderTotal] = useState(0)
  const [sliderCount, setSliderCount] = useState(1)

  const Sliders = () => {
    const sliderHtml = []
    images.forEach((slider, i) => {
      sliderHtml.push(
        <div key={i+1} className="bg-black slider w-full h-screen flex justify-center items-center">
          <div className="flex flex-row max-md:flex-col fixed top-[50vh] left-0 max-md:left-[30vw] justify-between z-[1] uppercase text-[0.8rem] text-center max-md:text-left">
            <span className="text-white w-[40vw] pb-0 max-md:pb-1">Product Name</span>
            <span className="text-white w-[40vw] pb-0 max-md:pb-1">Category Name</span>
            <span className="text-white w-[20vw] opacity-0"> <span className="border p-1 bg-white text-black">Explore</span> </span>
          </div>
          <img className="image-slider object-cover object-bottom w-auto h-[70vh] max-md:h-[100vh] top-[15vh] max-md:top-0 opacity-1 z-0" src={slider} alt={`slider-${i + 1}`} />
        </div>
      )
    })
    return sliderHtml
  }

  useGSAP(() => {

    const sliders = document.querySelectorAll(".slider")

    setSliderTotal(sliders.length)

    sliders.forEach((slider, i) => {

      const texts = slider.children.item(0).children
      const textTitle = new SplitType(texts.item(0), { type: 'chars' })
      const textCategory = new SplitType(texts.item(1), { type: 'chars' })
      const explore = texts.item(2)
      const imgSlider = slider.children.item(1)

      gsap.fromTo(['#lineslidewrp', '#slidercount'], 0.1, { opacity: 0 }, { opacity: 1, repeat: 2, stagger: 0.1 })
      gsap.set(imgSlider, { position: 'fixed' })

      //Image animation
      const tlImage = scrollAnimate(slider, "top center", "bottom center", "play reverse play reverse", false, false, false, false)
      tlImage.fromTo(imgSlider, 1, { autoAlpha: 0, clipPath: 'inset(110% 0px 0px 0px)', scale: 1.2 }, { autoAlpha: 1, clipPath: 'inset(0px 0px 0% 0px)', scale: 1, ease: Power2.easeOut, delay: 1 })

      //Text animation
      const tlText = scrollAnimate(slider, "top center", "bottom center", "play reverse play reverse", false, false, false, false)
      tlText.fromTo([textTitle.chars, textCategory.chars], 0.1, { opacity: 0, stagger: 0.02 }, { opacity: 1, stagger: 0.02, delay: 1 })
      tlText.fromTo(explore, 0.1, { opacity: 0 }, { opacity: 1, repeat: 2, delay: 0 })

      //Line and counter animations
      const enter = () => {
        setSliderCount(i + 1)
      }

      const leave = () => {
        if (i + 1 == sliders.length) {
          gsap.fromTo(['#lineslidewrp', '#slidercount'], 0.1, { opacity: 1 }, { opacity: 0, repeat: 2, stagger: 0.1 })
        } else {
          gsap.fromTo('#lineslide', 1, { height: '100%' }, { height: '0%', animationDirection: "bottom bottom", ease: Expo.easeInOut })
          gsap.fromTo(['#lineslidewrp', '#slidercount'], 0.1, { opacity: 0 }, { opacity: 1, repeat: 2, stagger: 0.2, delay: 0 })
        }
      }

      const enterBack = () => {
        setSliderCount(i + 1)
        gsap.fromTo(['#lineslidewrp', '#slidercount'], 0.1, { opacity: 0 }, { opacity: 1, repeat: 5, stagger: 0.05, delay: 0 })
      }

      const tlLineSlide = scrollAnimate(slider, i == 0 ? "center center" : "top center", i == 0 ? "bottom center" : "bottom center", false, true, enter, leave, enterBack)
      tlLineSlide.fromTo('#lineslide', 2, { height: '0%' }, { height: '100%' })

    })
  })

  return (
    <div className="z-0 bg-black">
      <div className="overflow-hidden fixed top-0 translate-y-[50vh] max-md:translate-y-[10vh] left-[5vw] z-[1] rounded-full">
        <span id="slidercount" className="text-white text-[0.8rem] opacity-0">{sliderCount} / {sliderTotal}</span>
      </div>
      <div id="lineslidewrp" className="z-10 opacity-0 overflow-hidden w-[0.25vh] h-[20vh] fixed top-0 translate-y-[40vh] left-[10vw] rounded-full bg-white/25">
        <div id="lineslide" className="bg-white w-full h-[0%]" ></div>
      </div>
      {Sliders()}
      <div className="h-[50vh] max-md:h-[0] bg-black"></div>
    </div>
  )
}

export default Slider