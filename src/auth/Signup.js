import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from '../img/logo.png';
import '../index.css';

function Signup() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [pin, setPin] = useState('');
    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = async(e
        // e: React.FormEvent<HTMLFormElement>
        ) =>{
        e.preventDefault();

        const data = {
            identity: email,
            app: "icare"
        };

        console.log("Call API");
// https://elife-products.com:3900/v2/register
        const res = await fetch('https://asha-ivf.com/api/auth/register', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await res.json();
        toast.success('OTP sent to your email, please check your INBOX or SPAM in registered email.', {
            duration: 4000
        });
        setStep(2);
    };

    const handleOTP = async(e
        // e: React.FormEvent<HTMLFormElement>
        ) =>{
        e.preventDefault();

        const data = {
            identity: email,
            verification_pin: pin,
            app: "sehatri"
        };

        console.log("Call API OTP");

        const res = await fetch('https://asha-ivf.com/api/auth/register/verify', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await res.json();
        setToken(json.data)
        // setToken(
        //     "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlX25hbWUiOm51bGwsInR6IjoiQXNpYS9KYWthdGEiLCJpbnN0aXR1dGlvbl90eXBlIjpudWxsLCJpYXQiOjE2MzQ2MTM0NDN9.A1krvyiCxLr-uptXFwXcVwLPb4idYRgVsy4cC3WhkwwP_0HaWs2nDuadmOSgoBcRsfyZmajoHA5_Fq6adF8sJpIvqy1ztVwhH9rz6XFLr0hDPuYm0qPYzWM1B7_yTpB4Q45ako-M8hLI7VtKL_DRr2kBq4Gympq2b2Sp-70WSC0"
        // );
        
        setStep(3);
    };

    const handleUpdateDetail = async(e
        // e: React.FormEvent<HTMLFormElement>
        ) =>{
        e.preventDefault();

        const data = {
            email: email,
            name: name,
            phone_number: phone,
            password: password
        };

        console.log("Call API Update Detail");

        const res = await fetch('https://asha-ivf.com/api/auth/register/detail', {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        const json = await res.json();
        // window.localStorage.setItem("accessToken", 
        //     "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkzN2Q5YzU2LWRjY2QtNDk2OC1iMmE3LWI3MjRjNzQyNGMyMyIsIm5hbWUiOm51bGwsInBob25lX251bWJlciI6Iis2Mjg1MjcxNDA0MTcwIiwiZW1haWwiOiJrdG1jaHljNUB0ZW1wb3JhcnktbWFpbC5uZXQiLCJ1c2VybmFtZSI6Imt0bWNoeWM1Iiwicm9sZV9uYW1lIjpudWxsLCJ0eiI6IkFzaWEvSmFrYXRhIiwiaW5zdGl0dXRpb25fdHlwZSI6bnVsbCwiaWF0IjoxNjM0NjIzNzgwLCJwYXNzd29yZCI6IiQyYSQxMyRINW9haWZDVS83Z2V4MFdWUWtpMFJPQ0hQSkJ4aWhxY0J6bnZFZHJxSXdtQjYyMWs2Wk1TMiJ9.Hf8gGczYuOh80-hGORi6QaK5SPlodEZ8BdibWRvp7-KOw1qbguzL6E1FW3Sf2alFgrtUXIAFdNSbt5CWbjpjFUK4hnu8fKNk_UIL7UNTRbbXn9DqDJi4QtYTR3K2k_LhsHmX9be86Q-LCEtrjHXptMJ3N5gNq906RwypKFGTK4w"
        // );
        
        navigate("/login");
    };

    return (
        <div>
            <div className="min-h-screen bg-gold1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                

                {/* Sign up */}
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
                            <h2 className="mt-6 mb-2 text-center text-3xl font-extrabold text-gray-900">Sign up for Enjoy Our Service</h2>
                        </div>
                        {step === 1 ? (
                            <form onSubmit = {handleRegister} className="space-y-6" action="#" method="POST">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={email} onChange={e => setEmail(e.target.value)}
                                            autoComplete="email"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gold2 focus:border-gold2 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gold3 hover:bg-gold2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold2"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        ) : step === 2 ? (
                            <form onSubmit={handleOTP} className="space-y-6" action="#" method="POST">
                                <div>
                                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                                        OTP
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="otp"
                                            name="otp"
                                            type="text"
                                            value={pin}
                                            onChange={e => setPin(e.target.value)}
                                            // autoComplete="email"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gold2 focus:border-gold2 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        // onClick = {() => setStep(3)}
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gold3 hover:bg-gold2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold2"
                                    >
                                        Verify
                                    </button>
                                </div>
                            </form>
                        ) : step === 3 ?(
                            <form onSubmit={handleUpdateDetail} className="space-y-6" action="#" method="POST">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            // autoComplete="email"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gold2 focus:border-gold2 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            value={phone}
                                            onChange={e => setPhone(e.target.value)}
                                            // autoComplete="email"
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

                                <div>
                                    <button
                                        // onClick = {() => navigate("/signin")}
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gold3 hover:bg-gold2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        ) : null }

                
                        <div className="flex items-center justify-center gap-2 my-6">
                            <div>
                                <p className="text-md font-semibold">Have an account?</p>
                            </div>
                            <div className="text-md text-gold3 font-bold">
                                <a href="/login">Sign in</a>
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
                                        Sign up with Facebook
                                </button>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold2"
                                    >
                                        Sign up with Google
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

export default Signup;