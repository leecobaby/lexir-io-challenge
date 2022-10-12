import type { NextPage } from 'next'
import { Header } from '../Header'
import { Footer } from '../Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
