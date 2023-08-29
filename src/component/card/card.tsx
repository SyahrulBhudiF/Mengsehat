import { cardInterface } from "../../type"

export const Card = ({img}:cardInterface) => {
  return (
    <div className="rounded-sm">
        <img src={img} alt="" className=""/>
    </div>
  )
}
