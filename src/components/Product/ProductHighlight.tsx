import type { NextPage } from 'next'
import Image from 'next/image'
import { Button } from '@components/index'

import Pic from '@assets/./packshot-kiss-my-rhubarb.png'

export const ProductHighlight: NextPage = () => {
  return (
    <section className="w-full">
      <div className="flex flex-row flex-wrap justify-between items-start py-10 px-9 w-full">
        {/* product image */}
        <div className=" w-7/12 h-[488px] bg-[#f9f9f9] border border-[#E7E7E7] rounded-md overflow-hidden relative">
          <div className=" absolute inset-0 m-auto w-32 h-4/5">
            <Image src={Pic} alt="product picture" />
          </div>
        </div>

        <div className=" w-1/3">
          <h2 className=" font-serif font-bold text-5xl leading-[56px] text-[#2D2D2D]">
            Kiss My Rhubarb
          </h2>
          <div className=" font-bold text-xl leading-6 text-[#CCCCCC]">APERITIF</div>
          <div className=" flex flex-row justify-between items-center py-2 px-1">123</div>
          <p className=" p-2 font-normal leading-6 text-[#2D2D2D] whitespace-pre-wrap mb-10">
            Kiss My Rhubarb is a fresh and aromatic Belgian aperitif. It uses bright and zesty
            supporting ingredients like pink grapefruit and lemon verbena to create an aperitif
            perfectly designed to pair with hot summery nights.
          </p>

          <div>
            <Button size="large">Button</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
