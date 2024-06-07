
import { ReactNode } from "react";
import MarginWidthWrapper from "./marginWidthWrapper";
import PageWrapper from "./pageWrapper";
import SideNav from "@/components/Nav/sideNav";
import TopHeader from "@/components/Nav/topHeader";
import ContextProvider from "@/provider/contextProvider";



export default function PageWithNavbar({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ContextProvider>
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
    </ContextProvider>
  )
}