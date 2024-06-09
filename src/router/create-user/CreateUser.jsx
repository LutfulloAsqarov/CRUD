import React, { useState } from "react";
import "./CreateUser.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:4000/products";

function CreateUser() {
    const [reload, setReload] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let product = Object.fromEntries(formData.entries());

        let { title, newPrice, oldPrice, category, image } = product;

        let newProduct = {
            title,
            price: { oldPrice, newPrice },
            category,
            image,
        };

        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        }).then((res) => {
            console.log(res);
            e.target.reset();
            setReload((p) => !p);
        });
    };

    return (
        <div className="create__user">
            <form
                onSubmit={handleSubmit}
                className="create__user-form"
                action=""
            >
                <h2>Create Product</h2>
                <input type="text" placeholder="title" name="title" />
                <input type="number" placeholder="old price" name="oldPrice" />
                <input type="number" placeholder="new price" name="newPrice" />
                <input type="text" placeholder="category" name="category" />
                <input type="text" placeholder="image url" name="image" />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateUser;
