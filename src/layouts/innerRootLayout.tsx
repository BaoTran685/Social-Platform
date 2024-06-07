'use client'

import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import PageWithNavbar from "./pageWithNavbar";


export default function InnerRootLayout({
  children,
}: {
  children: ReactNode
}) {
  const path = usePathname();
  console.log('path', path)

  if (path.startsWith('/auth')) {
    return (
      <>
        {children}
      </>
    )
  }
  return (
    <PageWithNavbar>
      {children}
    </PageWithNavbar>
  )
}
