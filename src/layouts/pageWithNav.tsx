
import { ReactNode } from "react";
import MarginWidthWrapper from "./marginWidthWrapper";
import PageWrapper from "./pageWrapper";
import SideNav from "@/components/navFolder/sideNav";
import TopHeader from "@/components/navFolder/topHeader";

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