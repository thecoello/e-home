import './style.css'
import Product from './components/Product'
import Slider from './components/Slider'
import ImageParallax from './components/ImageParallax'

function Intro() {
  return (
    <>

      <Slider />

      <div className='relative z-10'>

        <div className='bg-white p-2 text-[0.8rem] pt-[15vh] max-md:pt-5 pb-[15vh] max-md:pb-5 flex flex-row max-md:flex-col items-center relative z-[10] cursor-default'>
          <span className='uppercase font-bold w-[50%] max-md:w-[100%] max-md:pb-2'>
            Lorem ipsum dolor sit amet
          </span>
          <span className='uppercase w-[50%] max-md:w-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu gravida diam. Duis nec elit purus. Cras placerat hendrerit odio, molestie semper dolor dapibus eget. Nulla quis consectetur sem, non venenatis enim. </span>
        </div>

        <div className='bg-white z-10 relative'>
          <div className='flex p-1 max-md:flex-col'>
            <Product image={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <Product image={'https://images.unsplash.com/photo-1585845786337-2b2b17c55fb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <Product image={'https://images.unsplash.com/photo-1511401139252-f158d3209c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <Product image={'https://images.unsplash.com/photo-1532372576444-dda954194ad0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
          </div>
        </div>

        <div className='bg-white p-2 text-[0.8rem] pt-[15vh] max-md:pt-5 pb-[15vh] max-md:pb-5 flex max-md:flex-col items-center relative z-[10] cursor-default'>
          <span className='uppercase w-[30%] max-md:w-[100%] max-md:pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu gravida diam. Duis nec elit purus. Cras placerat hendrerit odio, molestie semper dolor dapibus eget. Nulla quis consectetur sem, non venenatis enim. </span>
          <span className='w-[20%]'></span>
          <span className='uppercase w-[50%] max-md:w-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu gravida diam. Duis nec elit purus. Cras placerat hendrerit odio, molestie semper dolor dapibus eget. Nulla quis consectetur sem, non venenatis enim. </span>
        </div>

        <ImageParallax />
      </div>

      <div className='bg-white p-2 text-[0.8rem] pt-[5vh] max-md:pt-5  pb-[15vh] max-md:pb-10 flex items-center relative z-[10] uppercase flex-row max-md:flex-col'>
        <span className='w-[20%] font-bold cursor-default  max-md:w-[100%] pb-2'>Lorem ipsum dolor sit amet</span>
        <span className='w-[20%]  max-md:w-[100%] pb-2'>
        <a className='p-2 max-md:p-0' href="http://" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className='p-2' href="http://" target="_blank" rel="noopener noreferrer">X</a>
        <a className='p-2' href="http://" target="_blank" rel="noopener noreferrer">Instagram</a>

        </span>
        <span className='w-[20%] max-md-w-[100%]'></span>
        <span className='uppercase w-[40%] max-md:w-[100%] cursor-default'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu gravida diam. Duis nec elit purus. Cras placerat hendrerit odio, molestie semper dolor dapibus eget. Nulla quis consectetur sem, non venenatis enim. </span>
      </div>

    </>
  )
}

export default Intro