import React from 'react'

export const LaunchSoon = () => {
  return (
    <div className="mt-[10px] h-10 w-[250px] p-2 rounded-full border border-[#3f1993]/10 flex items-center gap-2">
  <div className="px-1 py-1 bg-[#a576ff]/20 rounded-full flex items-center">
    <div className="text-[#a576ff] text-xs font-medium font-['Inter'] leading-3">
      New
    </div>
  </div>
  <div className="w-auto text-[#3f1993] text-base font-normal font-['Inter'] leading-snug whitespace-nowrap">
    We are launching soon
  </div>
  <div className="w-4 h-4"></div>
</div>

  )
}
