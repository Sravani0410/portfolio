import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 md:h-screen"
          : "bg-black pt-24 text-white md:h-screen"
      }
    >
      <div className="max-w-5xl mx-auto x-4 sm:px-6 lg:px-8 px-6 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        {/* <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div> */}
        <div >
          {/* <div >
             <form>
              <div class="my-6">
                <label
                  for="name"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="email"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="message"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Message
                </label>
                <textarea
                  id="message"
                  class="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between ">
                <div className="underline">
                  <a href="mailto:sandhyapyla.8@gmail.com">
                    Send me email directly
                  </a>
                </div>
                <button className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
                  <a href="mailto:sandhyapyla.8@gmail.com">Submit</a>
                </button>
              </div>
            </form> 
          </div> */}
          <div className="w-full flex justify-between md:items-center  mt-1 md:mt-0">
            <div className="w-full  md:items-center  mt-12 md:mt-0" >
              <div className="mb-4">
              <h1 className="text-3xl font-bold">Phone</h1>
            <a
              
              className="mb-4 mt-6 font-semibold text-blue-700 "
            >
              +91 9652883841
            </a>
              </div>
            {/* <h1 className="text-3xl font-bold">Phone</h1>
            <a
              href="hello"
              className="mb-4 mt-6 font-semibold text-blue-700 block uppercase"
            >
              +91 9652883841
            </a> */}
            <div className="mb-4">
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="mailto:sandhyapyla.8@gmail.com"
              className="mb-12 mt-4 font-semibold text-blue-700 "
            >
              sandhyapyla.8@gmail.com
            </a>
            </div>
           
           <div className="mb-4">
              <h1 className="text-3xl  font-bold">Address</h1>
            <a
             
              className="mt-4  mb-12 md:text-left font-semibold text-blue-700 "
            >
              Vishakaptanam, Andhra Pradesh
              <br />
              India
            </a>
           </div>
           
            </div>
          
          <div className="w-full  md:items-center  mt-12 md:mt-0">
          <h1 className="text-3xl font-bold px-4 md:px-0 text-center z-0">Social</h1>
            <ul className=" md:items-center">
              {contactLinks.map((el) => (
                <a
                  href={el.link}  target="__blank"
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </ul>
          </div>
            {/* <h1 className="text-3xl  font-bold">Social</h1> */}
            
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center md:mt-20"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-20"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Sravani Sandhya Devi
        
       
      </div>
      {/* <div class="text-center">
      Credit @ Aakash Kumar
      </div> */}
     
    </div>
  );
};

export default Contact;
