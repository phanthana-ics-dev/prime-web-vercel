'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // เรียก API ล็อกอิน
            // const response = await fetch('/api/auth/login', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email, password }),
            // });

            // if (!response.ok) {
            //     throw new Error('Invalid email or password');
            // }

            // const data = await response.json();

            // เก็บ JWT Token ใน localStorage
            //   localStorage.setItem('authToken', data.token);
            localStorage.setItem('authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzNDUiLCJ1c2VybmFtZSI6ImpvaG5kb2UiLCJyb2xlIjoibWFuYWdlciIsInBlcm1pc3Npb25zIjpbInZpZXciLCJlZGl0Il0sImV4cCI6MTY4Njc0NTIwMH0.rbHb-JOPQEBIhBT5TgKw2B7uWfswuscWRWV4q1WKuvo'); //manager

            // localStorage.setItem('authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzNDUiLCJ1c2VybmFtZSI6ImpvaG5kb2UiLCJyb2xlIjoidXNlciIsInBlcm1pc3Npb25zIjpbInZpZXciLCJlZGl0Il0sImV4cCI6MTY4Njc0NTIwMH0.thijUV8fceJliO05yHJBpQlqxyRUbdMQx8LkPr3HSIw'); //user


            // เปลี่ยนเส้นทางไป Dashboard
            router.push('/dashboard');
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message || 'Something went wrong');
              } else {
                setError('Something went wrong');
              }
        }
    };

    return (
        <main className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full border border-gray-300 p-2 rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full border border-gray-300 p-2 rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </main>
    );
}
