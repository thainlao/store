import React, { useState } from 'react';
import '../styles/dashboard.css'
import { Navigate, useNavigate } from 'react-router-dom';
const Dashboard = () => {
  let [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage'));
  let username = localStorage.getItem('username');
  let email = localStorage.getItem('email');
  let password = localStorage.getItem('password');
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64Image = reader.result;
      localStorage.setItem('profileImage', base64Image);
      setProfileImage(base64Image);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
    className='flex justify-center items-center gap-5
     text-black dashdiv flex-col'>
      <div className='flex justify-center items-center flex-col gap-3'>
        <p className='text-3xl font-semibold text-[#41403f]'>Кабинет {username}</p>
        <div className='flex gap-5'>
        <button onClick={() => {navigate('/orders')}} className='lg:w-36 md:w-32 md:h-12 lg:h-12 w-24 h-9 rounded-md hover:bg-[#cc8d8d] items-center bg-[#e29c9c] text-white'>Заказы</button>
        <button onClick={() => {navigate('/')}} className='lg:w-36 md:w-32 md:h-12 lg:h-12 w-24 h-9  rounded-md hover:bg-[#b4a9a9] items-center bg-[#c9bdbd] text-white'>На главную</button>
        </div>
      </div>
        <div className='dashboardcontainer lg:py-10 md:py-10 gap-5 flex justify-start flex-col'>
            <h2 className='ml-4'>Ваш Login: {username}</h2>
            <hr  className='bg-black p-[0.5px] '/>
            <h2 className='ml-4'>Ваш Email: {email}</h2>
            <hr  className='bg-black p-[0.5px] '/>
            <h2 className='ml-4'>Ваш Password: {password}</h2>
            <hr  className='bg-black p-[0.5px] '/>
            <input className='ml-4' type="file" onChange={handleImageUpload} />
            <hr  className='bg-black p-[0.5px] '/>
      {profileImage && <img className='lg:w-32 md:w-30 xl:w-32 2xl:w-32 2xl:h-32 xl:h-32 md:h-30 h-14 w-14 lg:h-32' src={profileImage} alt="Profile" />}
      <hr  className='bg-black p-[0.5px] '/>
      </div>
    </div>
  );
};

export default Dashboard;
