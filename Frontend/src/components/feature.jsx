
export default function Feature({ srcImg, title, txt }) {
    return <div className="feature-item">
        <img src={srcImg} alt="Chat Icon" className="feature-icon" />
        <h3 class="feature-item-title"> {title} </h3>
        <p>
            {txt}
        </p>
    </div>
}