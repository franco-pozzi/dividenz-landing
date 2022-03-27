import { ContactSection } from "../../components/ContactSection"
import { MapSection } from "../../components/MapSection"
import { ContactForm } from "./ContactForm"

export const Contact = () => {
    return (
        <>
            Contact Info
            <ContactForm />

            <MapSection />

            <ContactSection />
        </>
    )
}
