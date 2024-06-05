
interface Props {
  name: string,
  type: string,
  placeholder: string,
}

const InputBox = ({ items }: { items: Props }) => {
  const { name, placeholder } = items;

  return (
    <div className="flex justify-end md:w-2/3">
      <div className="h-screen w-full flex flex-col">
        <div className="flex justify-between items-center p-3">

          {/* Title label */}
          <span className="flex items-center space-x-1">
            <span className="text-lg font-semibold">Title:</span>
            <input
              type="text"
              className="text-sm text-black block w-auto bg-inherit border-b-2 border-b-[#1E1E24] focus:outline-none focus:border-b-[#21A179] transition-colors ease-linear p-2 placeholder:text-[#A1A1AA] appearance-none"
            />
          </span>

          {/* Date label */}
          <span className="flex items-center space-x-1">
            <span className="text-lg font-semibold">Date:</span>
            <input
              type="date"
              className="text-sm text-black block w-auto bg-inherit border-b-2 border-b-[#1E1E24] focus:outline-none focus:border-b-[#21A179] transition-colors ease-linear p-2 placeholder:text-[#A1A1AA] appearance-none"
            />
          </span>

        </div>

        <textarea
          name={name}
          className=" flex-1 bg-white shadow rounded-lg text-black notebook input--box"
          required
          autoComplete="off"
          placeholder={placeholder}
        />

        <div className="flex-wrap items-center mt-3">
          <div className="w-full md:w-2/3 md:pl-3">
            <button
              type="button"
              className="bg-[#21A179] shadow-inner transition-transform ease-in duration-300 hover:scale-105 mt-6 text-white p-2 rounded-lg md:float-right"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default InputBox;
