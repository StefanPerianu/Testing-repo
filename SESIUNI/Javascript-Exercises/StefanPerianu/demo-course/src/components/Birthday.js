function Birthday ( props) {
    const birthday = new Date(props.dayOfBorn.year, props.dayOfBorn.month, props.dayOfBorn.day);
    return (
     <h3>{birthday.toLocaleString()}</h3>
    )
}

export default Birthday;