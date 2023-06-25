import LandingHero from "./LandingHero"
import LandingMainSection from "./LandingMainSection"
import LandingNavbar from "./LandingNavbar"
import styles from "./landing.module.css"


const MainLanding = () => {
  return (
    <div className={styles.gradient} style={{ 'fontFamily': 'sans-serif' }}>
      <div className="leading-normal tracking-normal text-white">
        <LandingNavbar />
        <LandingHero />
        <LandingMainSection/>
      </div>
    </div>
  )
}

export default MainLanding