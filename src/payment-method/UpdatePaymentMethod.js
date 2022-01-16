import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePaymentMethod = () => {
    const [name, setName] = useState('');
    const [alias, setAlias] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getPaymentById();
    }, []);

    const getPaymentById = async() => {
        const response = await fetch(`http://localhost:4000/payment-method/${id}`);
        const data = await response.json();
        setName(data.name);
        setAlias(data.alias);
        setDescription(data.description);    
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const payment = { name, alias, description };
        await fetch(`http://localhost:4000/payment-method/${id}`, {
            method: "PUT",
            body: JSON.stringify(payment),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate("/payment-method");
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Detail Payment Method</h1>
            <form onSubmit={handleUpdate} className="space-y-4 max-w-sm mx-auto">
                <div className="col-span-6 sm:col-span-3">
                    <label className="label">Name</label>
                    <div 
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700">
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="given-name"
                            className="mt-1 focus:ring-indigo-500 py-2 px-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                            value={name} onChange={(e) => setName(e.target.value)} placeholder="Insert Name" />
                    </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label className="label">Alias</label>
                    <div
                        htmlFor="alias"
                        className="block text-sm font-medium text-gray-700">
                        <input
                            type="text"
                            name="alias"
                            id="alias"
                            autoComplete="given-alias"
                            className="mt-1 focus:ring-indigo-500 py-2 px-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={alias} onChange={(e) => setAlias(e.target.value)} placeholder="Insert Alias" />
                    </div>
                </div>


                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Description
                        </label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 py-2 px-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Insert Description"
                    />
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-gold2 text-white font-semibold text-sm w-full rounded-md">
                    Update
              </button>

            </form>
        </div>
    )
}

export default UpdatePaymentMethod;