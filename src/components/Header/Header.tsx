import type { NextPage } from 'next'
import Link from 'next/link'
import { IconLogo } from '@assets/index'
import { navs } from './config'

export const Header: NextPage = () => {
  return (
    <div className="flex flex-wrap justify-between items-center h-[104px] px-8 border-0 shadow-[0_4px_6px_0_rgba(0,0,0,0.06)] w-full">
      <section>
        <Link href="/">
          <a>
            <IconLogo />
          </a>
        </Link>
      </section>
      <nav>
        <ul className="flex justify-end items-center space-x-10">
          {navs?.map((nav) => (
            <li key={nav.label}>
              {nav.icon}
              <a
                className=" cursor-pointer font-medium text-center text-sm text-[#2D2D2D]"
                href={nav.path}
              >
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
