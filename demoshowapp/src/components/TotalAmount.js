
// components/TotalAmount.js
import React from 'react';
import PropTypes from 'prop-types';

const TotalAmount = ({ total }) => {
    return (
        <div className="total">
            {/* Calculate the total amount */}
            <h3>
                Total Amount: ₹{total ? parseFloat(total).toFixed(2) : "0.00"}
            </h3>
        </div>
    );
};

// Define prop types to ensure `total` is a number
TotalAmount.propTypes = {
    total: PropTypes.number
};

// Set default props in case `total` is undefined
TotalAmount.defaultProps = {
    total: 0
};

export default TotalAmount;


