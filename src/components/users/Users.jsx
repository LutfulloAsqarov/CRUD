import React, { useEffect, useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import EditProduct from "../editProduct";

let API_URL = "http://localhost:4000/products";

function Users() {
    const [data, setData] = useState(null);
    const [reload, setReload] = useState(false);
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((res) => setData(res));
    }, [reload]);

    const handleDelete = (id) => {
        if (confirm("Are you sure delete this product")) {
            fetch(`${API_URL}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => {
                console.log(res);
                setReload((p) => !p);
            });
        }
    };

    return (
        <>
            <div className="users__wrapper">
                {data?.map((product) => (
                    <div key={product.id} className="users__card">
                        <div className="users__card__img">
                            <img src={product.image} alt={product.image} />
                        </div>
                        <h2>{product.title}</h2>
                        <p>{product.price?.oldPrice}</p>
                        <p>{product.price?.newPrice}</p>
                        <button onClick={() => handleDelete(product.id)}>
                            Remove
                        </button>
                        <button onClick={() => setEdit(product)}>Edit</button>
                    </div>
                ))}
            </div>
            {edit ? (
                <EditProduct
                    data={edit}
                    setEdit={setEdit}
                    setReload={setReload}
                />
            ) : (
                <></>
            )}
        </>
    );
}

export default Users;
