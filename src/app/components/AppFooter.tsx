import React from 'react';

export default function AppFooter({ color = 'white', text = '' }) {
  return (
    <div>
      <footer
        style={{ color }}
        className='bg-red-600 px-4 md:px-8 py-4 md:py-8   bottom-0 h-auto w-full text-sm text-center'
      >
        {text}
      </footer>
    </div>
  );
}
