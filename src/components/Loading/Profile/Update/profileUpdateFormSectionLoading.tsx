import { FieldObj, InputObj } from "@/components/Types/Profile/Update/update";
import LoadingButton from "@/components/loadingButton";



const ProfileUpdateFormSectionLoading = ({ field }: { field: FieldObj  }) => {
  return (
    <div className="flex-grow flex flex-col space-y-6">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <InputItemLoading object={field.name} />
        </div>
        <div>
          <InputItemLoading object={field.email} />

        </div>
      </div>
      <div className="flex-grow flex flex-col space-y-6">
        <InputItemLoading object={field.description} />
        <LoadingButton type='button' text='Update' isLoading={false} isSuccess={false} />
      </div>
    </div>
  )
}

export default ProfileUpdateFormSectionLoading;


const InputItemLoading = ({ object }: { object: InputObj }) => {
  const { label, isInput } = object;
  return (
    <>
      <div className="text-black text-sm font-md block mb-2">
        {label}
      </div>
      {isInput ? (
        <div className="text--content text-transparent no--select bg-gray-300 rounded-full animate-pulse w-full">
          t
        </div>
      ) : (
        <div className="flex flex-col space-y-2">
          <div className="text--content text-transparent no--select bg-gray-300 rounded-full animate-pulse w-full">
            t
          </div>
          <div className="text--content text-transparent no--select bg-gray-300 rounded-full animate-pulse w-full">
            t
          </div>
          <div className="text--content text-transparent no--select bg-gray-300 rounded-full animate-pulse w-full">
            t
          </div>
        </div>
      )}

    </>

  )
}