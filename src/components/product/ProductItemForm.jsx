import { Card } from '@material-ui/core';
import React, { useRef } from 'react'
import "./ProductItemForm.css"

const ProductItemForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const skuInputRef = useRef();
  const urlInputRef = useRef();
  const quantityInputRef = useRef();
  const brandInputRef = useRef();
  const currencyInputRef = useRef();
  const taxInputRef = useRef();
  const weightInputRef = useRef();
  const shippingpriceInputRef = useRef();
  const priceInputRef = useRef();
  const unitpriceInputRef = useRef();
  const deliverymethodInputRef = useRef();
  const statusInputRef = useRef();
  //const imageInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredSku = skuInputRef.current.value;
    const enteredUrl = urlInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;
    const enteredBrand = brandInputRef.current.value;
    const enteredCurrency = currencyInputRef.current.value;
    const enteredTax = taxInputRef.current.value;
    const enteredWeight = weightInputRef.current.value;
    const enteredShippingPrice = shippingpriceInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredUnitPrice = unitpriceInputRef.current.value;
    const enteredDeliveryMethod = deliverymethodInputRef.current.value;
    const enteredStatus = statusInputRef.current.value;
    //const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const categoryData = {
      title: enteredTitle,
      image: enteredImage,
      url: enteredUrl,
      sku: enteredSku,
      quantity: enteredQuantity, 
      brand: enteredBrand,
      currency: enteredCurrency,
      tax: enteredTax,
      weight: enteredWeight,
      shipping_price: enteredShippingPrice,
      price: enteredPrice,
      unit_method: enteredUnitPrice,
      delivery_method: enteredDeliveryMethod,
      status: enteredStatus,
      description: enteredDescription,
    };

    props.onAddCategory(categoryData);
  }

  return (
    <Card>
    <div className='container'> 
      <form className="form" onSubmit={submitHandler}>
        <div className="control input">
          <label htmlFor='title'>Product Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className="control input">
          <label htmlFor='image'>Product Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className="control input">
          <label htmlFor='sku'>Sku</label>
          <input type='text' required id='sku' ref={skuInputRef} />
        </div>
        <div className="control input">
          <label htmlFor='quantity'>Quantity</label>
          <input type='number' required id='quantity' ref={quantityInputRef} />
        </div>
        <div className="control input">
          <label htmlFor='brand'>Brand</label> 
          <input type='text' required id='brand' ref={brandInputRef} />
        </div>
        <div className="control input">
          <label htmlFor='weight'>Weight</label> 
          <input type='text' required id='weight' ref={weightInputRef} />
        </div>
        <div className="control input">
          <label htmlFor='currency'>Currency</label>
          <input type='text' required id='currency' ref={currencyInputRef} />
        </div>
        <div className="control input">
          <label htmlFor='tax'>Tax</label>
          <input type='text' required id='tax' ref={taxInputRef} />
        </div>
        <div className="control input">
          <label htmlFor='image'>Image</label>
          <input type='file' required id='image' ref={imageInputRef} />
        </div>
        <div className="control input">
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="product_button">
          <button>Add Product</button>
        </div>
      </form> 
    </div>
    </Card>
  )
}

export default ProductItemForm