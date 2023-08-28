import React from "react"

interface Props{
  img: string
}

export const Card: React.FC<Props> = ({img}) => {
  return (
    <div className="rounded-sm">
        <img src={img} alt=""/>
    </div>
  )
}
