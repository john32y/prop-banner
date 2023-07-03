import '../styles/Banner.css'


export default function Banner({ title, content, fontColor, bgColor }) {

    return (
        <div className="banner-container"
        style={{"background-Color": bgColor, "color": fontColor}}>
        <h2>{title}</h2>
        <p>{content}</p>
        </div>
    )
}