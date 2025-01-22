import {Header} from '../component/Header'
import {Footer} from '../component/Footer'
import Hero from '../component/Hero';
import Special from '../component/Special';
import Testimonial from '../component/Testimonials';
import About from '../component/About';





export default function Homepage() {
    return (
        <>
           <Header />
            <Hero />
            <Special />
            <Testimonial />
            <About />
            <Footer />
        </>
    )
}