import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';


const AddPatientType = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  // const [open, setOpen] = useState(true);

  const handleAdd = async (e) => {
    e.preventDefault();
    const data = { name };
    // https://asha-ivf.com/api/master/service-type
    await fetch('http://localhost:4000/patient-type', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    navigate("/patient-type");
  }
    return (
      
          <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Add New Patient Type</h1>
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
              <button
                type="submit"
                className="px-4 py-2 bg-gold2 text-white font-semibold text-sm w-full rounded-md">
                Add
              </button>
            </form>
          </div>
    )
}

export default AddPatientType;

