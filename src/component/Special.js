import Card from "./Card"




export default function Special () {
        const items =[
          {img: require('../Assets/greek_salad.jpg') , title: "Greek Salad", price: "$12.99", paragraph: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ", cta: "order a delivery", bike: "require(../Assets/order.jpg"},
          {img: require('../Assets/Brushetta.jpg'), title: "Brushetta", price: "$5.99", paragraph: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.", cta: "order a delivery", bike: "require(../Assets/order.jpg"},
          {img: require('../Assets/lemon_dessert.jpg'), title: "Lemon Dessert", price: "$5.99", paragraph: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.", cta: "order a delivery", bike: require("../Assets/order.jpg")}
        ]

    return (
        <section className="section-special">
           <div className="container">
              <div className="heading-cont">
                <h1 className="heading-secondary special-heading">This weeks Specials!</h1>
                <button>Onling Menu</button>
              </div> 
              <div className="grid grid--3-cols">
                {items.map(item => 
                  <Card
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  paragraph={item.paragraph}
                  cta={item.cta}
                  bike={item.bike}
                   />
                )}
              </div> 
           </div>
        </section>
    )
}