import React from 'react'

function HomeModel() {
  return (
    <div className="relative w-full aspect-[4/3] pt-10 bg-neutral-600 rounded-[20px] p-2 shadow-xl">
      <iframe 
        src="/mini/index.html"
        title="Mini Portfolio"
        className="w-full h-full rounded-[30px]"
        style={{ border: "none" }}
      />
    </div>
  )
}

export default HomeModel

