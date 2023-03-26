import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';


function SignIn() {

  const githubSSO = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/githubSSO')
    .then(response => {
      if (!response.ok) {
        alert("error");

      } else {
       window.location.href = 'http://192.168.1.25:8080';
      }
    })
    .catch(error => {
      console.log("error");
    });
  };

  const login = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/githubSSO')
    .then(response => {
      if (!response.ok) {
        alert("error");

      } else {
       window.location.href = 'http://192.168.1.25:8080';
      }
    })
    .catch(error => {
      console.log("error");
    });
  };

    
  
  
 
 

  
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Login so you can create your own personalized cases</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  
              
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email"> Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="email@example.com" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                      <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button onClick={login.bind(this)} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
                    </div>
                  </div>

                  <div className="flex items-center my-6">
                  <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-400">Or, sign in with a provider</div>
                  <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                </div>

                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                    <button onClick={githubSSO.bind(this)} className="btn px-0 text-white bg-gray-600 hover:bg-green-700 w-full relative flex items-center" >
  <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.18.55-.4 0-.2-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.07-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.43 1.1.15 1.92.07 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .22.15.47.55.4A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
  <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
  <span className="flex-auto pl-16 pr-8 -ml-16">GitHub Login</span>
</button>
                    </div>
                  </div>

                </form>
               
            </div>
          </div>
          </div>

        </section>

      </main>

      <Banner />

    </div>
  
    
  );
  

};

export default SignIn;