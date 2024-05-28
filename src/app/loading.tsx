import PageWithNavbar from "@/layouts/pageWithNav";


const Loading = () => {
  return (
    <PageWithNavbar>
      <section className="flex flex-grow">
        <div className="place-self-center flex flex-col w-full items-center justify-center">
          <h2 className="text-3xl text-[#21A179] font-bold">Loading...</h2>
          <p className="text-lg text-[#37352F] font-semibold">Hopefully not for too long :)</p>
        </div>
      </section>
    </PageWithNavbar>
  )
}

export default Loading;