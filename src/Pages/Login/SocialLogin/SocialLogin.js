import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;
    
    if (error || error1) {
       
        errorElement = <div>
            <p className='text-denger'>Error: {error?.message} {error1?.message}</p>
        </div>
        
    }

    if(user || user1){
        navigate ('/')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-warning w-50 '></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-warning w-50 '></div>
            </div>

            {errorElement}
           
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-warning w-50% '>Google sign in</button>
            </div>
              <br/>
            <div>
                <button onClick={() => signInWithGithub()} className='btn btn-warning w-50% '>Github sign in</button>
            </div>
        </div>
    );
};

export default SocialLogin;