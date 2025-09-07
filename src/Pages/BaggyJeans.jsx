import { div } from 'framer-motion/client'
import Jens from '../assets/Jens.png'
import React from 'react'

function BaggyJeans() {
  return (
    <div>

     <h1 className="text-left bg-gray-100 px-2 gap-2 text-xl flex  font-mono mt-20">
        Jeans
      </h1>
      <div className="bg- w-full h-[400px] mt-3 relative flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Jens})` }}
              >
            </div>
          </div>
              </div>
  )
}

export default BaggyJeans