import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const GithubSignin = () => {

    return (
        <main>
            <button
                className="w-full py-3 px-6 bg-gray-900 text-white rounded-md flex items-center justify-center space-x-3 hover:bg-gray-800 transition-all"
            >
                <span className='flex items-center justify-center space-x-3'>
                    <FaGithub className="text-2xl" />
                    <span>Sign in with GitHub</span>
                </span>
            </button>
        </main>
    )
}

export default GithubSignin