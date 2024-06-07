'use client'
import { createContext, useContext } from "react";

export type SideNavContent = {
  isSideNavOpen: boolean,
  setIsSideNavOpen: (c: boolean) => void
}
export const SideNavContext = createContext<SideNavContent>({
  isSideNavOpen: true,
  setIsSideNavOpen: () => {},
});

export const useSideNavContext = () => useContext(SideNavContext)