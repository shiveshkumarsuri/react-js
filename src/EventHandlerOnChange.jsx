import React, {useState} from 'react'

function EventHandlerOnChange(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("Gift Card");

    const onChangeEventHandler = (event) => {
        setName(event.target.value);
    }
    const onChangeQuantity = (event) => {
        setQuantity(event.target.value);
    }

    const onChangeComment = (event) =>{
        setComment(event.target.value);
    }

    const onChangePayment = (event) =>{
        setPayment(event.target.value);
    }


    return(
        <div>
            <input value={name} onChange={onChangeEventHandler} />
            <p>Name:{name}</p>
            <input value={quantity} onChange={onChangeQuantity} type="number" />
            <p>Quantity:{quantity}</p>
            <textarea value={comment} onChange={onChangeComment} type="number" 
                placeholder='Enter Delivery Instructions!'/>
            <p>Quantity:{comment}</p>
            <select value={payment} onChange={onChangePayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

        </div>
    );
}

export default EventHandlerOnChange