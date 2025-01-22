




export function Footer () {
    return (
        <footer>
            <div className='container'>
                <section style={{display: "flex", justifyContent:"space-between" }}>
                <img style={{width: "10%"}} src={require('../Assets/icon2.png')} alt= "Logo" />
                    <article>
                        <h6>Doormart <br/> Navigation</h6>
                        <p><a href="#">Home</a></p>
                        <p><a href="#">About</a></p>
                        <p><a href="#">Menu</a></p>
                        <p><a href="#">Reservation</a></p>
                        <p><a href="#">Order online</a></p>
                        <p><a href="#">Login</a></p>
                    </article>
                    <article>
                        <h6>Contact</h6>
                        <p><a href="#">Address</a></p>
                        <p><a href="#">Phone number</a></p>
                        <p><a href="#">Email</a></p>
                    </article>
                    <article>
                    <h6>Social media links</h6>
                        <p><a href="#">Address</a></p>
                        <p><a href="#">Phone number</a></p>
                        <p><a href="#">Email</a></p>
                    </article>
                </section>
            </div>
        </footer> 
    )
}  