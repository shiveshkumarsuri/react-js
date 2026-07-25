function Button(){
    let count = 0;
    const handleClick = (name) =>{
        if(count < 3){
            count++;
            console.log(`${name} clicked me ${count} time/s`);
        }else{
            console.log(`${name} Stop Clicking me Now!`);
        }
    };

    return(
        <button onClick={() => handleClick("Shivesh")}> Click Me</button>
    );
}
export default Button