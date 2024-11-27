'use client';
import GithubSignin from "@/app/components/GithubSignin";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SignInPage = () => {

    return (
        <main className="flex items-center justify-center h-screen bg-gray-50">
            <div className="text-center p-6 max-w-sm w-full bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold mb-4">Sign in to Your Account</h1>
                <div className="space-y-4">
                    <button
                        className="w-full py-3 px-6 bg-red-600 text-white rounded-md flex items-center justify-center space-x-3 hover:bg-red-700 transition-all"
                    >
                        <FaGoogle className="text-2xl"/>
                        <span>Sign in with Google</span>
                    </button>

                   <GithubSignin/>

                    <button
                        className="w-full py-3 px-6 bg-blue-400 text-white rounded-md flex items-center justify-center space-x-3 hover:bg-blue-500 transition-all"
                    >
                        <FaXTwitter className="text-2xl"/>
                        <span>Sign in with Twitter</span>
                    </button>
                </div>

                <p className="mt-4 text-gray-500 text-sm">
                    By signing in, you agree to our <Link href={"#"} className="text-blue-400 hover:underline hover:underline-offset-1">Terms of Service</Link>, and <Link href={"#"} className="text-blue-400 hover:underline hover:underline-offset-1">Privacy Policy</Link>
                </p>
            </div>
        </main>
    );
};

export default SignInPage;
