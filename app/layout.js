import Navbar from './component/navbar/Index'
import GlobalState from './context/Index'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E Commerce',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
          <Navbar/>
          <main>{children}</main>
       
      </body>
    </html>
  )
}
