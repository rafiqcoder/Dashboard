import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client/react';
import { useSession, signIn } from 'next-auth/react';

import apolloClient from '../../graphql/client';
import { SIGNUP_MUTATION } from '../../graphql/mutations/auth';

const SignUp = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === 'authenticated') {
    router.replace('/home');
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    client: apolloClient,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await signup({
        variables: {
          createUserInput: {
            name,
            email,
            password,
          },
        },
        client: apolloClient,
        onCompleted: (data) => {
          signIn('credentials', {
            redirect: false,
            email,
            password,
            callbackUrl: '/home',
          });
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-4/12">
        <h2 className="text-xl font-medium mb-4">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              className="w-full border border-gray-300 p-2 rounded-md text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
