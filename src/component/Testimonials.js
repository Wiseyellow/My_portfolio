import Card2 from "./card2"



export default function Testimonial() {
    const items =[
        {rating: "Rating:", img: require('../Assets/John.jpg') , name: "John D.", review: "I enjoy your customer service, you are the best restaurant ever.", },
        {rating: "Rating:", img: require('../Assets/Ben.jpg') , name: "Ben T.", review: "I can’t do without your food daily,  I’m proud to refer my friends to you.", },
        {rating: "Rating:", img: require('../Assets/Jane.jpg') , name: "Jane D.", review: "first time I tasted your food , I got addicted to it straight away.", },
        {rating: "Rating:", img: require('../Assets/Ben.jpg') , name: "Smart K.", review: "Little lemon restaurant  is my favorite place to celebrate my birthday.", }
       
      ]

    return (
        <section className="section-testimonial">
            <div className="container">
                <h1 className='heading-secondary testimonial-heading'>Testimonials</h1>
                <div className='grid grid--4-cols'>
                    {items.map(item =>
                        <Card2 
                        rating={item.rating}
                        img={item.img}
                        name={item.name}
                        review={item.review}
                        />
                    )}
                </div>

            </div>
        </section>
    )
}