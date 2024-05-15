import { useParams } from "react-router-dom"

const Services = (): JSX.Element => {
  const params = useParams()
  return (
    <div>Services { params.serviceId }</div>
  )
}

export default Services