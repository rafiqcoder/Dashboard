import { useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import apolloClient from '../../graphql/client';
import { LOGIN_QUERY } from '../../graphql/queries/auth';

const Login = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === 'authenticated') {
    router.replace('/home');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error, data, refetch } = useQuery(LOGIN_QUERY, {
    client: apolloClient,
    skip: true,
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await refetch({
        email,
        password,
      });

      router.replace('/home');
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-4/12">
        <h2 className="text-xl font-medium mb-4">Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded-md text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 p-2 rounded-md text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
