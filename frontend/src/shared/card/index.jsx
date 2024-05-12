import { CardWrapper } from "./styles"

function Card({ children, ...rest }) {
  return (
    <CardWrapper  {...rest}>{children}</CardWrapper>
  )
}

export default Card