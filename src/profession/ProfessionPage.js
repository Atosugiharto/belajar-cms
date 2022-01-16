import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../index.css';

const ProfessionPage = () => {
    const [profession, setProfession] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/profession');
        const data = await response.json();
        setProfession(data);
    };

    const handleDelete = async(id) =>{
        await fetch(`http://localhost:4000/profession/${id}`,{
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
          <h1 className="text-2xl font-bold">Profession</h1>
          <Link
            to="/add/profession"
            className="px-4 py-2 bg-gold2 mx-2 my-2 text-white font-semibold text-sm"
          >
            Add New Profession
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
                    {profession.map((profession) => (
                      <tr key={profession.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {profession.name}
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link
                                        to={`/update/profession/${profession.id}`}
                                        className="text-indigo-600 hover:text-indigo-900"
                                >
                                Detail
                            </Link>
                            <button onClick={() => handleDelete(profession.id)} 
                                    className="ml-2 px-4 py-2 bg-red-500 text-white font-semibold text-sm">
                                    Delete
                            </button>
                          
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

export default ProfessionPage;