import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Introduction from "./components/Introduction"
import Title from "./components/Splash/Title"

const App = () => {
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(0deg, rgba(29,25,101,1) 0%, rgba(35,95,117,1) 100%)",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: "100vw",
          height: "100vh",
        }}
      />
      <Parallax pages={2.2}>
        <ParallaxLayer offset={0.35} speed={0} sticky={{ start: 0.35 }}>
          <Title />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.5}>
          <Introduction />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={3}>
          <Introduction />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
