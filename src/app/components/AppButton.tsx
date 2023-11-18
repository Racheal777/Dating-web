import React from 'react'

export default function AppButton({type= 'submit', text = '', backgroundColor = 'red'}: any) {
  return (
   
        <div>
            <button style={{backgroundColor}}  className="rounded-lg  border border-transparent px-6 py-2 text-white transition-colors" type={type}>{text}</button>
        
        </div>
   
   
  )
}
