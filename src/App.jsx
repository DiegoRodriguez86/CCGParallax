import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import habitacion from './img/habitacion2.jpg'
import estructura from './img/madera.jpg'
import madera1 from './img/madera1.jpg'
import madera2 from './img/madera2.jpg'
import madera3 from './img/madera3.jpg'
import madera4 from './img/madera4.jpg'
import { Banner } from './components/Banner'
import { NavBar } from './components/NavBar'

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
            sticky={{start: 1, end: 4}}
            style={{
              backgroundImage: `url(${estructura})`,
              backgroundSize: 'cover',
            }}
          /> */}
          <ParallaxLayer
          offset={1}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${madera1})`,
            backgroundSize: 'cover',
          }}
          />
          <ParallaxLayer
          offset={1.8}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${madera2})`,
            backgroundSize: 'cover',
          }}
          />
          <ParallaxLayer offset={0.5} speed={0.1}>
            <Banner />
          </ParallaxLayer>
          <ParallaxLayer offset={1.2} speed={2}>
            <h2>World</h2>
          </ParallaxLayer>
        </Parallax>
      </div>

    </>
  )
}

export default App
