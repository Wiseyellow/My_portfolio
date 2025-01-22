import restaurantfood from "../Assets/restauranfood.jpg"


export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="grid grid--2-cols">
                    <div className="hero-textbox">
                        <h1 className="heading-primary h1">Little Lemon</h1>
                        <h3 className="sub-heading h3">Chicago</h3>
                        <p className="lead-text p">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button>Reserve a table</button>
                    </div>
                    <div className="hero-img">
                        <img src={restaurantfood} alt="restaurantfood" />
                    </div>
                </div>
            </div>
        </section>
    )
}