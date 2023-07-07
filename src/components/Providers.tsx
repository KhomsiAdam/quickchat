'use client'

import { FC, ReactNode, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'next-themes'
interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const [mounted, setMounted ]= useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return (
    <>
      {children}
    </>
  )


  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <ThemeProvider defaultTheme='light' attribute='class'>{children}</ThemeProvider>
    </>
  )
}

export default Providers