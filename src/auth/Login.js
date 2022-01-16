import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from '../img/logo.png';
import '../index.css';

function Login() {
    const navigate = useNavigate();
    // const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    // const [pin, setPin] = useState('');
    // const [token, setToken] = useState('');
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async(e) =>{
        e.preventDefault();

        const data = {
            identity: email,
            password: password
        };

        // console.log("Call API");
// https://elife-products.com:3900/v2/register
        const res = await fetch('https://asha-ivf.com/api/auth//login', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await res.json();
        console.log(json);
        toast.success('Welcome, login successful.', {
            duration: 4000
        });
        navigate("/");
    };

    // const handleOTP = async(e) =>{
    //     e.preventDefault();

    //     const data = {
    //         identity: email,
    //         verification_pin: pin,
    //         app: "sehatri"
    //     };

    //     console.log("Call API OTP");

    //     const res = await fetch('https://37ad-125-167-56-245.ngrok.io/v2/register/verify', {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     const json = await res.json();
    //     setToken(json.data)
        
    //     setStep(3);
    // };

    // const handleUpdateDetail = async(e
      
    //     ) =>{
    //     e.preventDefault();

    //     const data = {
    //         email: email,
    //         name: name,
    //         phone_number: phone,
    //         password: password
    //     };

    //     console.log("Call API Update Detail");

    //     const res = await fetch('https://37ad-125-167-56-245.ngrok.io/v2/register/detail', {
    //         method: "PUT",
    //         headers: {
    //             "Content-type": "application/json",
    //             "Authorization": `Bearer ${token}`
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     const json = await res.json();
        
    //     navigate("/login");
    // };

    return (
        <div>
            <div className="min-h-screen bg-gold1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div className="flex items-center justify-center sm:mx-auto sm:w-full sm:max-w-md">
                            <img
                                className="mx-auto h-12 w-auto"
                                src={logo}
                                alt="Asha IVF"
                            />
                        </div>

                        <div className="flex items-center justify-center sm:mx-auto sm:w-full sm:max-w-md">
                            <h2 className="mt-6 mb-2 text-center text-3xl font-extrabold text-gray-900">Sign in to your Account</h2>
                        </div>
                        <form onSubmit={handleLogin} className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                            </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gold2 focus:border-gold2 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                            </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gold2 focus:border-gold2 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-end">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-gold3 hover:text-gold2">
                                        Forgot Password?
                                 </a>
                                </div>
                            </div>

                            <div>
                                <button
                                   
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gold3 hover:bg-gold2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold2"
                                >
                                   Sign in
                            </button>
                            </div>
                        </form>


                        <div className="flex items-center justify-center gap-2 my-6">
                            <div>
                                <p className="text-md font-semibold">Do not have an account?</p>
                            </div>
                            <div className="text-md text-gold3 font-bold">
                                <a href="/signup">Sign up</a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-6">
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold2"
                                    >
                                        Sign in with Facebook
                                </button>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold2"
                                    >
                                        Sign in with Google
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;