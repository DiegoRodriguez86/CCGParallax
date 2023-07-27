import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import habitacion from './img/habitacion2.jpg'
// import estructura from './img/madera4.jpg'
import { Banner } from './components/Banner'
import { NavBar } from './components/NavBar'
import { SectionGaleria } from './components/SectionGaleria'


function App() {

  return (
    <>
      <div>
        <Parallax pages={6}>
          <NavBar/>
          <ParallaxLayer
            offset={0.11}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(${habitacion})`,
              backgroundSize: 'cover',
            }}
          />
          {/* <ParallaxLayer
            offset={1}
            speed={1}
            factor={1}
            style={{
              backgroundImage: `url(${estructura})`,
              backgroundSize: 'cover',
            }}
          /> */}
          <ParallaxLayer offset={0.5} speed={0.05}>
            <Banner />
          </ParallaxLayer>
          <ParallaxLayer offset={1.3} speed={0.5}>
            <SectionGaleria/>
          </ParallaxLayer>
        </Parallax>
      </div>

    </>
  )
}

export default App
