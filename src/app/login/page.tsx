
import FormSection from "./components/FormSection";

const LoginPage = async () => {
  return (
    <main className="mt-32">
      <div className="grid grid-cols-[minmax(40px,1fr)_minmax(auto,708px)_minmax(40px,1fr)] sm:grid-cols-[minmax(96px,1fr)_minmax(auto,708px)_minmax(96px,1fr)]">
        <div />
        <div className="flex flex-col align-center justify-center w-full h-full bg-[#e7e7e76b] rounded-xl shadow-xl space-y-8 p-8">
          <div className="place-self-center text-[#37352F] text-xl">
            Social Media
          </div>
          <FormSection />
        </div>
        <div /></div>
    </main>
  )
}

export default LoginPage;