
// components/BillDetails.js
import React, { useState } from 'react';

const BillDetails = ({ setName, setEmail, setContact, onAddItem }) => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddItem = () => {
        // Validate that item contains only letters and spaces
        if (!/^[a-zA-Z\s]+$/.test(item.trim())) {
            setErrorMessage('Item should only contain alphabetical characters.');
            return;
        }

        // Validate that quantity and price are numbers
        if (isNaN(quantity) || quantity <= 0) {
            setErrorMessage('Quantity should be a positive number.');
            return;
        }
        if (isNaN(price) || price <= 0) {
            setErrorMessage('Price should be a positive number.');
            return;
        }

        // Add item to the list
        const newItem = { item, quantity: parseInt(quantity), price: parseFloat(price) };
        onAddItem(newItem);

        // Clear inputs and error messages
        setItem('');
        setQuantity('');
        setPrice('');
        setErrorMessage('');
    };

    return (
        <div className="bill-details">
            <h2>Customer Details</h2>
            <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Contact Number"
                onChange={(e) => setContact(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            
            <h2>Add Item</h2>
            <input 
                type="text"
                placeholder="Item"
                value={item}
                onChange={(e) => setItem(e.target.value)}
            />
            <input 
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button className= "btn1" onClick={handleAddItem}>
                Add item
            </button>
            <p style={{ color: 'red' }}>{errorMessage}</p>
        </div>
    );
};

export default BillDetails;

