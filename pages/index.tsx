import type { NextPage } from 'next';
import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  const loginHandler = () => {
    if (status === 'authenticated') {
      console.log(session?.user.email);
      signOut();
    } else signIn();
  };

  return (
    <div>
      <Head>
        <title>Rubiks cube scrambler and timer</title>
        <meta name="description" content="Rubiks cube scrambler and timer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button className="flex text-6xl" onClick={loginHandler}>
        SignIN
      </button>
    </div>
  );
};

export default Home;
