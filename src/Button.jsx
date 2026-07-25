function Button(){

    const handleEvent = () => console.log("I am clicked!");

    const handleEvent2 = (name) => console.log(`${name} clicked Me`);

    return(
        <button onClick={() => handleEvent2("Shivesh")}> Click Me</button>
    );
}

export default Button