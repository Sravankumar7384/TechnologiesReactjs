import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-item`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="card-img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
