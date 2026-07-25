function Button(){

    const style = {    
            backgroundColor: 'hsl(200, 100%, 50%)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            padding: '10px 20px',
            borderRadius: '5px'
    }

    return(
        <button style={style}> Click Me</button>
    );
}

export default Button