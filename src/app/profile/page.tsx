'use client'
import ContentSection from "./components/ContentSection"
import PostSection from "./components/PostSection"
import Cor from "./components/Cor-6-Tooth"
import { useRouter } from "next/navigation"

const ProfilePage = () => {
  const route = useRouter();

  const handleClick = () => {
    route.push('/login');
  }
  return (
    <section className="text-[#37352F] mt-32">
      <div className="grid grid-cols-[minmax(40px,1fr)_minmax(auto,708px)_minmax(40px,1fr)] sm:grid-cols-[minmax(96px,1fr)_minmax(auto,708px)_minmax(96px,1fr)]">
        <div />
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Quoc Bao Tran
            </div>
            <div className="flex items-center justify-center cursor-pointer" onClick={() => handleClick()}>
              <Cor />
            </div>
          </div>
          <div className="w-full h-0.5 bg-[#ddd] mt-2" />
          <ContentSection />
          <div className="w-full h-0.5 bg-[#ddd] mt-2" />
          <PostSection />
        </div>
        <div />
      </div>
    </section>
  )
}

export default ProfilePage;