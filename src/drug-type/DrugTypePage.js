import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../index.css';

const DrugTypePage = () => {
    const [drug, setDrug] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/drug-type');
        const data = await response.json();
        setDrug(data);
    };

    const handleDelete = async(id) =>{
        await fetch(`http://localhost:4000/drug-type/${id}`,{
            method : "DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        });   
        fetchData();
    }

    return (
        
        <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Drug Type</h1>
          <Link
            to="/add/drug-type"
            className="px-4 py-2 bg-gold2 mx-2 my-2 text-white font-semibold text-sm"
          >
            Add New Drug Type
          </Link>
        </div>

        <div className="mt-4 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Detail</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {drug.map((drug) => (
                      <tr key={drug.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {drug.name}
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link
                                        to={`/update/drug-type/${drug.id}`}
                                        className="text-indigo-600 hover:text-indigo-900"
                                >
                                Detail
                            </Link>
                            <button onClick={() => handleDelete(drug.id)} 
                                    className="ml-2 px-4 py-2 bg-red-500 text-white font-semibold text-sm">
                                    Delete
                            </button>
                          {/* <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default DrugTypePage;