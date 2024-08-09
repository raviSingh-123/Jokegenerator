import React, { useState } from 'react'
import Button from '../Button/Button'
function Joke() {
     const[joke,setJoke]=useState(" ")

     const fetchAPI=()=>{
        fetch("https://api.chucknorris.io/jokes/random")
        .then((res)=>res.json())
        .then((res)=>setJoke(res.value))
     }

    return (
        <>
            <div className='bg-slate-500 max-w-screen  h-[500px]'>
                <div className='mx-[40px] md:mx-[150px]'>
                    <h2 className='text-2xl font-serif font-semibold bg-slate-500 text-white justify-center text-center p-3 '>Joke Generator Website</h2>
                    <Button callApi={fetchAPI} />
                    <p className='text-2xl font-serif text-white justify-center text-center mt-4 '>{joke}</p>
                </div>
            </div>
        </>
    )
}

export default Joke
