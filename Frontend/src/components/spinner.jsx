export default function Spinner({ sizeCategory }) {
    console.log(sizeCategory)
    return (
        <div className= 'contenaire-spinner'>
            <div className={`spinner ${sizeCategory}`}>

            </div>
        </div>
    )
}
