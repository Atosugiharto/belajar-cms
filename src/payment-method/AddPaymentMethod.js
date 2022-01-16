import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';


const AddPaymentMethod = () => {
  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  // const [open, setOpen] = useState(true);

  const handleAdd = async (e) => {
    e.preventDefault();
    const data = { name, alias, description };
    // https://asha-ivf.com/api/master/service-type
    await fetch('http://localhost:4000/payment-method', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    navigate("/payment-method");
  }
    return (
      
          <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Add New Payment Method</h1>
            <form onSubmit={handleAdd} className="space-y-4 max-w-sm mx-auto">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                        </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="mt-1 px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Insert Name"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Alias
                        </label>
                <input
                  type="text"
                  name="alias"
                  id="alias"
                  autoComplete="given-alias"
                  className="mt-1 px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  placeholder="Insert Alias"
                />
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
                  className="mt-1 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Insert Description"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-gold2 text-white font-semibold text-sm w-full rounded-md">
                Add
              </button>
            </form>
          </div>
    )
}

export default AddPaymentMethod;

