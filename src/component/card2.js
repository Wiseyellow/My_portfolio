





export default function Card2(props) {
    return (
      <>
        <div className="customer-cont">
          <p className="rating">{props.rating}</p>
          <div className="imgbox">
            <div><img  alt="customer" src={props.img} /></div>
            <p>{props.name} </p>
          </div>
          <p className="review">{props.review}</p>
       </div>
      </>
    )
}