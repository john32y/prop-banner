export default function Footer() {
    const fullYear = new Date().getFullYear()

    const gitHubLink = 'https://github.com/john32y'

    return (
        <footer>
            <p>&copy; {fullYear}</p>
            <p><a href={gitHubLink} target= "blank" rel= "noreferrer">GitHub</a></p>
        </footer>
    );

}