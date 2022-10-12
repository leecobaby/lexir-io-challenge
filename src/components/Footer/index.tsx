import type { NextPage } from 'next'
import Link from 'next/link'
import { navs, socialNavs } from './config'
import { IconLogo } from '@assets/index'

const Footer: NextPage = () => {
  return (
    <footer className=" flex flex-col items-center bg-[#2D2D2D] px-5 py-6 w-full overflow-hidden text-white">
      {/* footer warpper  */}
      <div className=" flex flex-row flex-wrap items-start justify-between px-6 w-full">
        {/* logo */}
        <div>
          <Link href="/">
            <a>
              <IconLogo fill="white" />
            </a>
          </Link>
        </div>

        {/**
         * navigation
         *
         * PS: I have no real data, so I plan to let the client control the route, which will be faster
         */}
        <div className=" flex flex-row flex-wrap flex-initial items-start justify-between w-[740px]">
          {navs?.map((nav, index) => (
            <div key={index} className="">
              <h4 className="text-[#8F8F8F] font-medium leading-8 uppercase">{nav.title}</h4>
              <ul className="flex flex-col font-medium leading-8 mt-4">
                {nav.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path}>
                      <a>{link.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/**
         *  socials
         *
         *  PS: they have jumps ^-^
         */}
        <div>
          <ul className=" flex flex-row justify-around items-center space-x-2">
            {socialNavs?.map((nav, index) => (
              <li key={index}>
                <a href={nav.path} target="_blank" rel="noreferrer">
                  {nav.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* footer line */}
      <div className=" box-border h-px bg-[#8f8f8f] bg-clip-content mb-2 mt-5 w-full px-3 "></div>

      {/* footer policy */}
      <div className=" flex flex-wrap justify-between px-3 w-full">
        <p className=" font-light">© 2022 Lexir Inc.</p>
        <div className="flex items-center space-x-16  font-medium leading-8">
          <Link key={''} href={'/'} className="">
            <a>Privacy</a>
          </Link>
          <Link key={''} href={'/'} className="">
            <a>Terms of service</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
