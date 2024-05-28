'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ReactNode } from 'react';

export default function ProgressProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <ProgressBar
        height="2px"
        startPosition={0.3}
        color="#21A179"
        options={{ showSpinner: true }}
        shallowRouting />
      {children}
    </>
  )
}