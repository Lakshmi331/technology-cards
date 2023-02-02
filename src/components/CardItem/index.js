import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} list-item`}>
      <h1 className="titlee">{title}</h1>
      <p className="para">{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt="title" className="image" />
      </div>
    </li>
  )
}

export default CardItem
