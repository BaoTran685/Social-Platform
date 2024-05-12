
import ContentSection from "./ContentSection"
import PostSection from "./PostSection"

const HomeSection = () => {
  return (
    <section className="text-[#37352F] mt-32">
      <div className="grid grid-cols-[minmax(96px,1fr)_minmax(auto,708px)_minmax(96px,1fr)]">
        <div></div>
        <div className="flex flex-col">
          <div className="text-5xl lg:text-6xl font-semibold">
            Quoc Bao Tran
          </div>
          <div className="w-full h-0.5 bg-[#ddd] mt-2" />
          <ContentSection />
          <div className="w-full h-0.5 bg-[#ddd] mt-2" />
          <PostSection />
        </div>

        <div></div>
      </div>
    </section>
  )
}

export default HomeSection;