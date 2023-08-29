import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import habitacion from '../img/habitacion2.jpg'
import { Banner } from '../components/Banner'
import { NavBar } from '../components/NavBar'
import { SectionGaleria } from '../components/SectionGaleria'
import { Reasons } from '../components/Reasons'
import { Process } from '../components/Process'
import { Brands } from '../components/Brands'
import { Footer } from '../components/Footer'

export const LandingPage = () => {
  return (
    <>
        <Parallax pages={5}>
          <ParallaxLayer
          speed={0}
          >
          <NavBar/>
          </ParallaxLayer>       
          <ParallaxLayer
            offset={0.09}
            speed={1}
            factor={0.9}
            style={{
              backgroundImage: `url(${habitacion})`,
              backgroundSize: 'cover',
            }}
          />
          <ParallaxLayer offset={0.4} speed={0.8}>
            <Banner />
          </ParallaxLayer>
          <ParallaxLayer offset={0.99} speed={0.8} factor={1}>
            <SectionGaleria/>
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={0.5} factor={1}>
            <Reasons />
          </ParallaxLayer>
          <ParallaxLayer offset={2.5}>
            <Process/>
          </ParallaxLayer>
          <ParallaxLayer offset={3.8}>
            <Brands/>
          </ParallaxLayer>
          <ParallaxLayer offset={4.7}>
            <Footer/>
          </ParallaxLayer>
        </Parallax>
    </>
  )
}
