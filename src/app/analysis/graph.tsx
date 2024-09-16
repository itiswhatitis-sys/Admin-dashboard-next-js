import React from 'react'
import { FiUser } from 'react-icons/fi'

const Graph = () => {
  return (
    <div className="col-span-8 overflow-hidden rounded border border-stone-300">
    <div className="p-4">
      <h3 className="flex items-center gap-1.5 font-medium">
        <FiUser /> Activity
      </h3>
    </div>
    <div className="h-64 w-42 px-4"></div>
    </div>
  )

}
export default Graph