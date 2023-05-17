import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut, signIn } from 'next-auth/react';
import Link from 'next/link';

const Home = () => {
  const router = useRouter();
  const { data, status } = useSession();
  const [loggedInUser, setLoggedInUser] = useState<any>(null);

  useEffect(() => {
    setLoggedInUser(data);
  }, [data]);

  const onLogInHandler = () => {
    signIn();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {status === 'authenticated' ? (
        <>
          <p className="text-lg font-medium mb-4">
            Welcome, {data?.user?.name}
          </p>
          <Link className="text-blue-500 underline" href="/profile">
            Profile
          </Link>
          <p
            className="text-blue-500 underline cursor-pointer"
            onClick={() => {
              signOut();
            }}
          >
            Signout
          </p>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg mb-4 flex flex-col items-center">
            <Link className="text-blue-500 underline" href="/auth/signup">
              Sign Up
            </Link>{' '}
            <br />
            Already have an account?
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 block"
              onClick={() => {
                signIn();
              }}
            >
              Sign In
            </button>
            to access the content.
          </p>
        </>
      )}
    </div>
  );
};

export default Home;
