import React,{useState} from 'react'

function Onchange() {
    const [name, setName]=useState("Guest")

    const [payment, setPayment]=useState("")

    const[shipping, setShipping]=useState("")

    const handleShippingChange=(e)=>{
        setShipping(e.target.value)
    }

    const handlePaymentchance=(e)=>{
        setPayment(e.target.value)
    }


    const handleNameChange=(e)=>{
        setName(e.target.value)
    }

    const [quantity, setQuantity]=useState(1)
    const handleQuantityChange=(e)=>{
        setQuantity(e.target.value)
    }
    const [comment, setComment]=useState()

    const HandleCommentsChange=(e)=>{
        setComment(e.target.value)
    }

  return (
    <>
    <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>name:{name}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <p>Quantity:{quantity}</p>
    </div>

    <textarea value={comment} onChange={HandleCommentsChange}
    placeholder='Enter delivery task' />
    <p>Comment:{comment}</p>

    <select value={payment} onChange={handlePaymentchance}>
        <option value="">Select an option:</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
    </select>
    <p>payment: {payment}</p>
    <label>
    <input type="radio" value="Pick Up"
                checked={shipping==="Pick Up"}
                onChange={handleShippingChange}/>
        Pick up
    </label>
    <label>
    <input type="radio" value="Delivery"
                checked={shipping==="Delivery"}
                onChange={handleShippingChange}/>
        Delivery
    </label>
    <p>Shipping:{shipping}</p>
    </>
  )
}

export default Onchange