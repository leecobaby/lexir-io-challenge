import type { NextPage } from 'next'
import Link from 'next/link'

const Footer: NextPage = () => {
  return (
    <footer className=" flex flex-col items-center bg-[#2D2D2D] px-5 py-6 w-full overflow-hidden">
      <div className=" box-border h-px bg-[#8f8f8f] bg-clip-content mb-2 mt-5 w-full px-3 "></div>
      <div className=" flex justify-between px-3 w-full">
        <p className="text-white font-light">© 2022 Lexir Inc.</p>
        <div className="flex items-center space-x-16 text-white font-medium leading-8">
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
