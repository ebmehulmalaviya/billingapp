import React, { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md"
import { CiEdit } from "react-icons/ci";
const Form = () => {
  const [ispresent, setIspresent] = useState(false)
  const [edite,setIsedite]=useState('')
  const [user, setUser] = useState([])
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Function to handle form submission
  const getFormData = (event) => {
    event.preventDefault()
    const newUserArray = [...user,{email:formData.email,password:formData.password,id:Math.random()}];
    setUser(newUserArray);
    console.log('newUserArray',newUserArray);
      // event.target.email.value = null,
      // event.target.password.value = null
      setFormData([])
  };
  const remove = (index) => {
    const updatedUserArray = [...user];
    updatedUserArray.splice(index, 1);
    setUser(updatedUserArray);
  };

  const edited = (e) => {
    setFormData({ ...formData, email: e.email,password:e.password});
    setIsedite(e)
  };

  const userEdite =()=>{
    const indexs = user.findIndex((userData) => userData.id === edite.id);
    const editedUser = [...user];
    // editedUser[indexs] = { ...editedUser[indexs], ...edite };
    editedUser[indexs] = { email: edite.email, password: edite.password };
    setUser(editedUser);

    // const userEdite = () => {
    //   const index = user.findIndex((userData) => userData.id === edite.id);
    //   const editedUserArray = [...user];
    //   editedUserArray[index] = {
    //     email: formData.email,
    //     password: formData.password,
    //     id: edite.id,
    //   };
    //   setUser(editedUserArray);
    // };
  }


  // Function to update state when input values change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='py-20 w-1/2 mx-auto'>
      <form className='pt-28 pb-28' onSubmit={getFormData}>
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com"
          />
        </label>
        <label className="block mt-10">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Password"
          />
        </label>
        <div className='mt-10'>
          <button type='submit' className='px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600 transition-all duration-300 hover:-translate-y-4'>
            Login
          </button>
          <button type='submit' onClick={()=>userEdite()} className='mx-3 px-7 py-2 bg-gray-600 text-white rounded hover:bg-gray-600 transition-all duration-300 hover:-translate-y-4'>
            Edite
          </button>
        </div>
      </form>
      {/*  submited user data  */}
      <div>
        {user.map((e, index) => (
          <div key={index} className="flex mt-2 items-center justify-between px-3 justify-center  shadow-md w-1/2 mx-auto py-2 rounded-md text-gray-600 bg-red-100">
            <div className="shrink-0 mx-a">
              <img className="h-16 w-16 object-cover rounded-full" src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg" alt="Current profile photo" />
            </div>
            <label className="block">{e.email}</label>
            <div>
            <button className='text-2xl text-red-500 px-3' type='btn' onClick={()=>remove(e.id)}><MdOutlineDeleteOutline /></button>
            <button className='text-2xl text-gray-800' type='btn' onClick={()=>edited(e)}><CiEdit /></button>
            </div>
          </div>)
        )}
      </div>
    </div>
  );
};

export default Form;
