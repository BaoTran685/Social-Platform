
import { ReactNode } from "react";
import SideNav from "../components/Nav/sideNav";
import TopHeader from "../components/Nav/topHeader";
import MarginWidthWrapper from "./marginWidthWrapper";
import PageWrapper from "./pageWrapper";

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
          <PageWrapper>
            {children}
          </PageWrapper>
        </MarginWidthWrapper>
      </div>

    </main>
  )
}