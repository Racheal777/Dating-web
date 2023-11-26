import React from 'react'

export default function AppFooter({color='White', text= ''}) {
  return (
    <div>
        <footer style={{color}}  className='appFooter bg-red-600 px-8 py-4  w-full text-sm text-center'>{text}</footer>
    </div>
  )
}
