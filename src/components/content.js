import { Header } from './header'
import { AboutMeSection } from './aboutMe'
import { EducationSection } from './education'
import { HobbySection } from './hobbies'

export function Content() {
    return (
        <div className="area">
            <Header />
            <AboutMeSection />
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <HobbySection />
            <EducationSection />
        </div>
    )
}
