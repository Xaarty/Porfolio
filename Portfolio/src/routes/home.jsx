import Propos from "../components/a-propos"
import Portrait from "../components/portrait"
import Projets from "../components/projets"

export default function Home () {
    return (
        <div className="home-content">
            <Portrait />
            <Propos />
            <Projets />
        </div>
    )
}