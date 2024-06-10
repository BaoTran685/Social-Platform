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

  return (
    !path.startsWith('auth') ? (
      <PageWithNavbar>
        {children}
      </PageWithNavbar>
    ) : (
      <>
        {children}
      </>
    )

  )
}
