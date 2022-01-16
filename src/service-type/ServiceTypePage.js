import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../index.css';

const ServiceTypePage = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/service-type');
        const data = await response.json();
        setService(data);
    };

    const handleDelete = async(id) =>{
        await fetch(`http://localhost:4000/service-type/${id}`,{
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
          <h1 className="text-2xl font-bold">Service Type</h1>
          <Link
            to="/add"
            className="px-4 py-2 bg-gold2 mx-2 my-2 text-white font-semibold text-sm"
          >
            Add New Service Type
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
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Description
                      </th>
                      {/* <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Content
                    </th> */}

                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Detail</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {service.map((service) => (
                      <tr key={service.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {service.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                         {service.description}
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {service.content}
                        </td> */}
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link
                                        to={`/update/${service.id}`}
                                        className="text-indigo-600 hover:text-indigo-900"
                                >
                                Detail
                            </Link>
                            <button onClick={() => handleDelete(service.id)} 
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
        // <div>
        //     <h2 className="text-3xl font-bold">Users</h2>
        //     <Link to="/add" className="bg-gray-700 px-2 py-1">Add News</Link>
        //     <table className="">
        //         <thead>
        //             <tr>
        //                 <th>No</th>
        //                 <th>Title</th>
        //                 <th>Image</th>
        //                 {/* <th>Action</th> */}
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {news.map((news, index) => (
        //                 <tr key={news.id}>
        //                     <td>{index + 1}</td>
        //                     <td>{news.title}</td>
        //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        //                         <img
        //                             className="w-40 object-cover"
        //                             src={news.image}
        //                             alt={news.title}
        //                         />
        //                     </td>
        //                     {/* <td>
        //                         <Link to={`/edit/${news.id}`} className="button is-small is-info">Edit</Link>
        //                         <button onClick ={() => deletenews(news.id) } className="button is-small is-danger">Delete</button>
        //                     </td> */}
        //                 </tr>
        //             ))}

        //         </tbody>
        //     </table>
        // </div>
    )
}

export default ServiceTypePage;