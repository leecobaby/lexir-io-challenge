import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { IconLogo } from '@assets/index'
import styles from './index.module.css'
import { navs } from './config'

const Header: NextPage = () => {
  return (
    <div className="flex justify-between items-center h-[104px] px-8 border-0 shadow-[0_4px_6px_0_rgba(0,0,0,0.06)] w-full">
      <section>
        <IconLogo />
      </section>
      <nav>
        <ul className="flex justify-end items-center space-x-10">
          {navs?.map((nav) => (
            <Link key={nav.label} href={nav.path}>
              <li>
                {nav.icon}
                <a className=" cursor-pointer font-medium text-center text-sm text-[#2D2D2D]">
                  {nav.label}
                </a>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
