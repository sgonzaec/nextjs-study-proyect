import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'AboutPage',
    description: "Esta es la pagina sobre nosotros",
    category: 'Inforamción'
}

export default function AboutPage() {
    return (
        <span>About</span>
    )
}