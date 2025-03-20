import React from 'react';



export const FlagArIcon = ({ className = "w-[576px] h-[353px]" }) => {
  return (
		<svg className={className} viewBox="0 0 576 353" xmlns="http://www.w3.org/2000/svg">
      <rect width="576" height="353" fill="white"/>
      <rect y="0" width="576" height="117" fill="#74ACDF"/>
      <rect y="236" width="576" height="117" fill="#74ACDF"/>
      <circle cx="288" cy="176.5" r="40" fill="#F6B40E" stroke="#D69A00" strokeWidth="2"/>
      <g stroke="#D69A00" strokeWidth="2">
        <line x1="288" y1="116" x2="288" y2="96" />
        <line x1="288" y1="237" x2="288" y2="257" />
        <line x1="328" y1="176.5" x2="348" y2="176.5" />
        <line x1="248" y1="176.5" x2="228" y2="176.5" />
        <line x1="316" y1="146" x2="332" y2="130" />
        <line x1="316" y1="207" x2="332" y2="223" />
        <line x1="260" y1="146" x2="244" y2="130" />
        <line x1="260" y1="207" x2="244" y2="223" />
      </g>
    </svg>
  )
}
