export default function Banner4(
    {howMany, shirt, data: {title, content, bgcolor, fontColor}}
    
    ) {

    return (
        <div className="banner-conatiner"
        style={{"backgroundColor": bgcolor, "color": fontColor}}>
            <h2>{title}</h2>
            <p>shirt: {shirt}</p>
            <p>howMany: {howMany}</p>
            <p>{content}</p>

        </div>
    )
}