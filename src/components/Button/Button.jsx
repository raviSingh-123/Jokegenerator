import React from 'react'

function Button(props){
  return (
   <>
      <div className='justify-center items-center text-center ' >
     <button className='border-2 border-solid border-black p-[5px] bg-slate-400 mt-5 hover:shadow-md hover:bg-slate-200 rounded-[25%] duration-200 hover:scale-110 hover:translate-y-3'onClick={props.callApi}>Click to generate joke.</button>
     </div>
   </>
  )
}

export default Button
