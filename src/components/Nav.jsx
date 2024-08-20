import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

function Nav() {

  const nav = useRef()

  useGSAP(()=>{
    gsap.fromTo(nav.current, 0.1, { opacity: 0 }, { opacity: 1, repeat: 4, stagger: 0.1, delay: 0.25 })
  })

  return (
    <div ref={nav} className='w-full flex items-center justify-center fixed top-0 left-0 p-2 z-[99] mix-blend-difference text-white uppercase text-[0.8rem]'>
      <div className='w-[20%]'>
        <span>EHOME</span>
      </div>
      <div className='w-[10%]'></div>
      <div className='w-[50%]'>
          
          <div className="flex items-center justify-end">
            <a className="p-1" href="">New</a>
            <a className="p-1" href="">Products</a>
            <a className="p-1" href="">Stores</a>
            <a className="p-1" href="">Contact</a>
          </div>

      </div>
      <div className='w-[20%] flex justify-end items-center'>
          <div className="w-auto bg-white text-black flex justify-center items-center pr-1 pl-1">0</div>
          <div className="w-[15%] p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          </div>
      </div>

    </div>
  )
}

export default Nav