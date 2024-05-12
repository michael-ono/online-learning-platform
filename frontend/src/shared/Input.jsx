const Input = ({icon: Icon, name, type, placeholder, onChange }) => {

    return (
        <div className='relative'>
          <div className=''>
            <span className="z-10 h-full leading-snug font-normal absolute text-blueGray-300 bg-[#6a8e3a] rounded text-base items-center justify-center w-10 pl-3 py-3">
              {Icon && <Icon color="white" className="cursor-pointer" />}
            </span>
            <input
              className="signupInput"
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
            />
          </div>
        </div>
    )
};

export default Input;

export const AssignmentInput = ({name, type, onChange }) => {

  return (
    <input
      name={name}
      type={type}
      onChange={onChange}
      className="w-2/5 px-3 py-2 text-black placeholder-gray-400 border bg-grey-400 border-gray-800 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
    />
  )
};