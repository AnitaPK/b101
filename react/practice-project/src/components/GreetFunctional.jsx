function GreetFunctional(props){
    console.log(props)
    return(
        <p>Welcome <b>{props.user}</b>;  to our React World.
            ....</p>
    )
}



export default GreetFunctional