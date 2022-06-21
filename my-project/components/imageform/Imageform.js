import React from 'react'

const Imageform = ({ labelName, fileName, setData, data }) => {
  const handleChange = (e) => {
    setData({ ...data, [fileName]: e.target.files[0] })
  }
  return (
    <div className="w-full mb-3 ">
      <label
        htmlFor="formFile"
        className="text-slate-600 form-label inline-block mb-2 font-semibold"
        name="citizenship"
      >
        {labelName}
      </label>
      <input
        onChange={handleChange}
        className="form-control
block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        type="file"
        name={fileName}
        id="formFile"
        accept="image/png,image/jpeg"
      />
    </div>
  )
}

export default Imageform
