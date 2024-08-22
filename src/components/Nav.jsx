import { useGSAP } from "@gsap/react"
import gsap, { Expo } from "gsap"
import { useRef, useState } from "react"
import Cart from "./Cart"

function Nav() {

  const nav = useRef()
  const [openCart, setOpenCart] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = useRef()

  const { contextSafe } = useGSAP(() => {
    gsap.fromTo(nav.current, 0.1, { opacity: 0 }, { opacity: 1, repeat: 4, stagger: 0.1, delay: 0.25 })
  })

  const setOpenCartFunction = () => {
    setOpenCart(true)
  }

  const setCloseCartFunction = () => {
    setOpenCart(false)
  }

  const openAndClouseMenu = contextSafe (()=>{
    console.log(openMenu)
    if(!openMenu){
      setOpenMenu(true)
      gsap.set(menuOptions.current,{display: 'flex'})
      gsap.to(menuOptions.current.children,1,{opacity: 1, stagger: 0.2, overwrite: 'auto', ease: Expo.easeOut})
    }
    else if(openMenu){
      setOpenMenu(false)      
      gsap.to(menuOptions.current.children,1,{opacity: 0, stagger: 0.2, ease: Expo.easeOut, overwrite: 'auto', onComplete: ()=>{
        gsap.set(menuOptions.current,{display: 'none'})
      }})
    }
  })

  return (
    <>
      <div ref={nav} className='w-full flex items-start justify-center fixed top-0 left-0 p-2 z-[99] mix-blend-difference text-white uppercase text-[0.8rem]'>
        <div className='w-[20%]'>
          <span>EHOME</span>
        </div>
        <div className='w-[40%]'>
          <div ref={menuOptions} className="flex items-center justify-end max-md:items-end max-md:flex-col max-md:fixed max-md:right-0 max-md:top-12 max-md:text-[2rem] max-md:hidden">
            <a className="p-1 max-md:opacity-0" href="">New</a>
            <a className="p-1 max-md:opacity-0" href="">Products</a>
            <a className="p-1 max-md:opacity-0" href="">Stores</a>
            <a className="p-1 max-md:opacity-0" href="">Contact</a>
          </div>
        </div>
        <div className="w-[20%] flex justify-end items-center">
        </div>
        <div className='w-[20%] flex justify-end items-center'>
          <div onClick={setOpenCartFunction} className="p-1 cursor-pointer flex justify-center items-center">
            <span>0</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            </div>

            <span onClick={openAndClouseMenu}  className="pl-4 pr-0 hidden max-md:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </span>
        </div>
      </div>

      {openCart ? <Cart cartStatus={openCart} setCloseCartFunction={setCloseCartFunction} /> : null}
    </>
  )
}

export default Nav