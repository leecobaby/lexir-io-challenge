import type { NextPage } from 'next'
import Image from 'next/image'
import { Button } from '@components/index'
import styles from '@styles/Home.module.css'
import { IconPlus, IconMinus, IconBelgium } from '@assets/index'
import Pic from '@assets/./packshot-kiss-my-rhubarb.png'
import { useState } from 'react'

import NP from 'number-precision'

export const ProductHighlight: NextPage = () => {
  const [count, setCount] = useState(1)
  const [price, setPrice] = useState(20.99)
  const [total, setTotal] = useState(price)

  const handleCount = (type: string) => {
    if (type === 'plus' && count < 999) {
      setCount(count + 1)
      setTotal(NP.plus(total, price))
    } else {
      if (count > 1) {
        setCount(count - 1)
        setTotal(NP.minus(total, price))
      }
    }
  }

  const handleInput = (e: any) => {
    console.log(typeof e.target.value)

    // Convert to Integer
    const value = ~~e.target.value
    if (value >= 0 && value < 1000) {
      setCount(value)
      setTotal(NP.times(price, value))
    }
  }

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

          <div className=" font-bold text-xl leading-6 text-[#CCCCCC] px-2">APERITIF</div>

          <div className=" flex flex-row justify-between items-center py-2 px-1 mt-4">
            <div className=" flex items-center space-x-2">
              <IconBelgium height={24} />
              <span className=" font-bold capitalize">IZEGEM, BELGIUM</span>
            </div>
            <div className=" px-2">
              <span className=" font-bold capitalize">21% ABV</span>
            </div>
          </div>

          <p className=" p-2 font-normal leading-6 text-[#2D2D2D] whitespace-pre-wrap mb-10">
            Kiss My Rhubarb is a fresh and aromatic Belgian aperitif. It uses bright and zesty
            supporting ingredients like pink grapefruit and lemon verbena to create an aperitif
            perfectly designed to pair with hot summery nights.
          </p>

          <div className=" flex flex-row justify-between items-center my-3 h-12">
            <div className=" flex justify-center items-center py-3 px-11 w-48 border border-secondary-300 rounded h-full overflow-hidden">
              700ml
            </div>
            <div className="flex justify-center items-center relative w-[136px] border border-secondary-300 rounded box-border h-full text-center overflow-hidden">
              <button
                className=" absolute left-4 top-1/2 -translate-y-1/2 text-center h-6 leading-6 cursor-pointer"
                onClick={() => handleCount('minus')}
              >
                <IconMinus className=" align-top" stroke={count <= 1 ? '#AEAEAE' : '#2D2D2D'} />
              </button>

              <span className=" absolute left-1/3 top-1/2 -translate-y-1/2 h-8 border-l border-secondary-300"></span>
              <div className="">
                <input
                  type="number"
                  value={count ? count : ''}
                  className="text-center w-[30%] appearance-none border-0 rounded-sm focus:z-auto focus:border-primary-700 focus:outline-none focus:border"
                  onInput={handleInput}
                />
              </div>
              <span className=" absolute right-1/3 top-1/2 -translate-y-1/2 h-8 border-l border-secondary-300"></span>

              <button
                className=" absolute right-4  top-1/2 -translate-y-1/2 text-center h-6 leading-6 cursor-pointer"
                onClick={() => handleCount('plus')}
              >
                <IconPlus className=" align-top" />
              </button>
            </div>
          </div>

          <div className=" w-full">
            <Button size="full" model="input">
              <span className={styles['prevent-move']} data-text={'Button'}>
                Add to Cart
              </span>
              <span className={styles['prevent-move']} data-text={'$230.33'}>
                {total}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
