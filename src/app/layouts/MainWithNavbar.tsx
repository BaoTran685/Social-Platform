
import { ReactNode } from "react";
import SideNav from "../components/SideNav";
import TopHeader from "../components/TopHeader";
import MarginWidthWrapper from "../components/MarginWidthWrapper";

export default function MainWithNavbar({
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