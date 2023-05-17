import { getSession } from 'next-auth/react';

import apolloClient from '@/graphql/client';
import { FIND_USER_QUERY } from '@/graphql/queries/auth';

const Profile = (props: any) => {
  const { user } = props;
  return (
    <div className="text-center">
      <h3>Profile Page</h3>
      <br />
      <br />
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/home',
      },
      props: {},
    };
  }

  try {
    const { data } = await apolloClient.query({
      query: FIND_USER_QUERY,
      variables: {
        email: session.user?.email,
      },
    });

    const { id, name, email } = data.findByEmail;

    return {
      props: {
        user: {
          id,
          name,
          email,
        },
      },
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
