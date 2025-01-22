


export default function Card(props) {
  return (
    <>
      <div className="specials-cont">
        <img alt="food-items" src={props.img} />
        <div className="special-textbox">
          <div className="title-price">
              <h3 className="card-title">{props.title}</h3>
              <p className="price">{props.price}</p>
          </div>
          <div className='parag'><p className="paragraph">{props.paragraph}</p></div>
          <div className="order-cont">
            <p className="lead-text order" >{props.cta}</p>
            <div><img className="bike" alt="bike" src={props.bike} /></div>
          </div>
        </div>
     </div>
    </>
  )
} 