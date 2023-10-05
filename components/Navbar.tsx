import { NextComponentType } from "next";
import waitlist from '@zootools/waitlist-js'
import { EventHandler, MouseEventHandler } from "react";


const Navbar: NextComponentType = () => {
    const clickPopup = (event: any) => {
        event.preventDefault();
      
        // Pass your waitlist ID
        waitlist.openPopup("4K24YZCoS7xhGRvL85us")
      }
      
      
    return (
        <div className="w-full flex flex-col gap-8 mb-8 md:mb-16">
            <div className="pt-6 pb-2 mx-24 flex flex-row items-baseline justify-between text-center border-b-2 border-white">
                <h1 className="text-4xl md:text-6xl">The Transient State</h1>
                <div onClick={clickPopup} className="hidden md:block bg-black text-white w-24 py-2 text-center cursor-pointer">
                    Follow
                </div>
            </div>
            <div onClick={clickPopup} className="absolute right-0 block md:hidden w-24 bg-black text-white py-2 text-center cursor-pointer">
                    Follow
            </div>
        </div>
    )
}

export default Navbar