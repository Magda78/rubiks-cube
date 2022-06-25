import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';


const Login: NextPage = () => {
   
	
  return (
    <div className='max-w-3xl h-full m-auto'>
      <div className='flex justify-between p-5 items-center border-b-2'>
      <img src='img/rubik_1.png' className='w-12 h-12'/>
      <button onClick={() => signIn()} className='bg-green-700 text-yellow-300 hover:bg-yellow-300 hover:text-green-700 p-3 hover:scale-105 transition transform duration-200 easy-out'>SignUp</button>
      </div>
      
      
    </div>
  );
};

export default Login;