import React from 'react'

export default function AppButton({type= 'submit', text = '', color = 'White'}: any) {
  return (
   
        <div>
            <button style={{color}}  className="rounded-lg  border border-transparent px-6 py-2  bg-red-600 transition-colors hover:border-gray-300 hover:bg-red-800 hover:dark:border-neutral-700 " type={type}>{text}</button>
        
        </div>
   
   
  )
}
