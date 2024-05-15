
import FormSection from "./components/FormSection";


const RegisterPage = async () => {
  return (
    <main className="mt-32">
      <div className="layout">
        <div />
        <div className="flex flex-col align-center justify-center w-full h-full bg-[#e7e7e76b] rounded-xl shadow-xl space-y-8 p-8">
          <div className="place-self-center text-[#37352F] text-xl">
            Social Media
          </div>
          <FormSection />
        </div>
        <div />
      </div>
    </main>
  )
}

export default RegisterPage;