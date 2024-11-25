
import React from "react";
import BillDetails from './components/BillDetails';
import ItemList from './components/ItemList';
import TotalAmount from './components/TotalAmount';
import { jsPDF } from 'jspdf';
import './Bill.css';
import './BillDetails.css';

function Bill() {
    const [items, setItems] = React.useState([]);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [date, setDate] = React.useState(new Date().toLocaleString()); // Set default to current date and time
    const [contact, setContact] = React.useState('');

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const calculateTotalAmount = () => { 
        return items.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    const handleDownloadPDF = () => {
        const pdf = new jsPDF();
        let yOffset = 20;

        // Center "Invoice" title
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(18);
        const pageWidth = pdf.internal.pageSize.getWidth();
        const titleText = "Invoice";
        const titleX = (pageWidth - pdf.getTextWidth(titleText)) / 2; // Centering the title
        pdf.text(titleText, titleX, yOffset);

        yOffset += 20;

        // Add customer details
        pdf.setFontSize(12); // Reset font size for details
        pdf.setFont("helvetica", "bold");
        pdf.text('Customer Details', 20, yOffset);
        yOffset += 10;

        pdf.setFont("helvetica", "normal");
        pdf.text(`Name: ${name}`, 20, yOffset);
        yOffset += 10;
        pdf.text(`Email: ${email}`, 20, yOffset);
        yOffset += 10;
        pdf.text(`Date and Time: ${date}`, 20, yOffset);
        yOffset += 10;
        pdf.text(`Contact: ${contact}`, 20, yOffset);
        yOffset += 20;

        // Add items header in bold
        pdf.setFont("helvetica", "bold");
        pdf.text("Items:", 20, yOffset);
        yOffset += 10;

        pdf.setFont("helvetica", "normal"); // Reset to normal font for item details
        items.forEach((item, index) => {
            pdf.text(
                `Item no. ${index + 1}: ${item.item}, Quantity: ${item.quantity}, Price: ${item.price}`,
                20,
                yOffset
            );
            yOffset += 10;

            // Add new page if needed
            if (yOffset > 270) { 
                pdf.addPage();
                yOffset = 20;
            }
        });

        // Add total amount
        const totalAmount = calculateTotalAmount();
        yOffset += 10;
        pdf.text(`Total Amount: ${totalAmount.toFixed(2)}`, 20, yOffset);

        // Save PDF with the current date as filename
        pdf.save(`invoice_${new Date().toISOString().split('T')[0]}.pdf`);
    };

    return (
        <div className="Bill">
            <h1>BILL / INVOICE </h1>
            <BillDetails 
                onAddItem={handleAddItem}
                setName={setName}
                setEmail={setEmail}
                setDate={setDate}
                setContact={setContact}
            />
            <ItemList 
                items={items}
                onDeleteItem={handleDeleteItem} 
            />
            <TotalAmount total={calculateTotalAmount()} />
            <button className="btn" onClick={handleDownloadPDF}>Download PDF</button>
        </div>
    );
}

export default Bill;

