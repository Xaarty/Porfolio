import Propos from "../components/a-propos"
import Portrait from "../components/portrait"
import Projets from "../components/projets"
import Intro from "../components/intro"


export default function Home () {
    return (
        <div className="home-content">
            <Intro />
            <Portrait />
            <Propos />
            <Projets />
        </div>
    )
}