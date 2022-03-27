import { ManagementTeam, ImagesForSlider } from './data'
import { ManagementTeamCard } from './ManagmentTeamCard'
import { ImageSlider } from './ImageSlider'
import { ContactSection } from '../../components/ContactSection'

export const AboutUs = () => {
    return (
        <>
            AboutUs
            {ManagementTeam.map((person, key) => <ManagementTeamCard person={person} key={key} />)}

            {ImagesForSlider.map(({ src, alt }, key) => <ImageSlider src={src} alt={alt} key={key} />)}

            <ContactSection />
        </>
    )
}
