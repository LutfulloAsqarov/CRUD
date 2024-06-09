import React, { useEffect } from "react";

// const initialState = {
//     title: "",
//     oldPrice: "",
//     newPrice: "",
//     category: "",
//     image: "",
// };

let API_URL = "http://localhost:4000/products";

const EditProduct = ({ data, setEdit, setReload }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${API_URL}/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log(res);
            // e.target.reset();
            setReload((p) => !p);
        });
    };

    // useEffect(() => {
    //     const { id, oldPrice, newPrice, category, image } = data;
    //     setEdit({ id, oldPrice, newPrice, category, image });
    // }, [data]);

    // console.log(data);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setEdit((prev) => ({ ...prev, [name]: value }));
    };
    return (
        <>
            <div className="overlay"></div>
            <div className="create__user">
                <form
                    onSubmit={handleSubmit}
                    className="create__user-form"
                    action=""
                >
                    <h2>Create Product</h2>
                    <input
                        type="text"
                        placeholder="title"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="old price"
                        name="oldPrice"
                        value={data.price?.oldPrice}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="new price"
                        name="newPrice"
                        value={data.price?.newPrice}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="category"
                        name="category"
                        value={data.category}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="image url"
                        name="image"
                        value={data.image}
                        onChange={handleChange}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        </>
    );
};

export default EditProduct;
