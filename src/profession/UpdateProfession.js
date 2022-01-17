import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProfession = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getProfessionById();
    }, []);

    const getProfessionById = async() => {
        const response = await fetch(`http://localhost:4000/profession/${id}`);
        const data = await response.json();
        setName(data.name);
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const profession = { name };
        await fetch(`http://localhost:4000/profession/${id}`, {
            method: "PUT",
            body: JSON.stringify(profession),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate("/profession");
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Detail profession Type</h1>
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

                <button
                    type="submit"
                    className="px-4 py-2 bg-gold2 text-white font-semibold text-sm w-full rounded-md">
                    Update
              </button>

            </form>
        </div>
    )
}

export default UpdateProfession;