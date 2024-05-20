
import { ReactNode } from "react";
import SideNav from "../components/Nav/SideNav";
import TopHeader from "../components/Nav/TopHeader";
import MarginWidthWrapper from "./MarginWidthWrapper";

export default function PageWithNavbar({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="flex">
      <SideNav />
      <div className="flex-1">
        <MarginWidthWrapper>
          <TopHeader />
          {children}
        </MarginWidthWrapper>
      </div>
    </main>
  )
}