import { useGSAP } from "@gsap/react"
import gsap, { Expo } from "gsap"
import { useRef, useState } from "react"

function Cart({cartStatus, setCloseCartFunction}) {

  const cart = useRef()
  const { contextSafe } = useGSAP()

  useGSAP(()=>{
    if(cartStatus){
      gsap.fromTo(cart.current,0.5,{x: '50vw'},{x: 0,ease: Expo.easeInOut})
    }
  })

  const closeCart = contextSafe(() => {
    gsap.fromTo(cart.current,0.5,{x: 0},{x: '50vw',ease: Expo.easeInOut, onComplete: ()=>{
      setCloseCartFunction()
    } })
  })

  return (
    <div ref={cart} className="w-[50vw] max-md:w-[100vw] h-screen bg-white fixed top-0 right-0 flex flex-col z-[999] p-4 uppercase">

      <div className="flex justify-between items-center border-b p-2">
        <span>Cart</span>
        <span onClick={closeCart} className="cursor-pointer">X</span>
      </div>

      <div className="h-full w-full flex justify-center items-center text-[0.8rem]">
        <span>No items</span>
      </div>

    </div>
  )
}

export default Cart