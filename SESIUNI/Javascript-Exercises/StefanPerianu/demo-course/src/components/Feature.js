import './Feature.css';

function Feature (props) {
    return (
        <div className='feature-content'>
            <h3>{props.name}</h3>
            <button>{props.action}</button>
        </div>
    )
}

export default Feature;