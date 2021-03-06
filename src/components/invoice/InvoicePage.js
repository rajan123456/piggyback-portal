import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import { getInvoiceByPartnerId } from "../../api/invoiceApi";
import InvoiceList from "./InvoiceList";

function InvoicePage() {
    const [invoice, setInvoice] = useState({
        amount: "",
        due_Date: "",
        invoice_id: 0,
        lineItem: "",
        partnerId: "",
        status: ""
    });
    const partnerId = JSON.parse(localStorage.getItem("partnerId"));

    useEffect(() => {
        getInvoiceByPartnerId(partnerId).then(_invoice => setInvoice(_invoice));
    }, []);

    return (
        <div className="container-fluid">
            <Header />
            <div className="body">
                <h2>Invoices</h2>
                <InvoiceList invoice={invoice} />
            </div>
        </div>
    );
}

export default InvoicePage;
