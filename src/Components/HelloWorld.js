const HelloWorld = (props) => {
    return(
        <div>
            <h1>Hello, my name is {props.name}!</h1>
            
            <p>I am {props.age} years old.</p>
        </div>
    )
}

ReactDOM.render(
    <HelloWorld 
    name='Albayrak' 
    
    age='24' />,
    
    document.getElementById('root')
)