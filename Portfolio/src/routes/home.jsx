import Propos from "../components/a-propos"
import Portrait from "../components/portrait"

export default function Home () {
    return (
        <div className="home-content">
            <Portrait />
            <Propos />
        </div>
    )
}