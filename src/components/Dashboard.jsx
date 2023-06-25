import React, { useState } from 'react';

const Dashboard = () => {
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage'));
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Преобразуем изображение в строку base64 и сохраняем его в localStorage
      const base64Image = reader.result;
      localStorage.setItem('profileImage', base64Image);
      setProfileImage(base64Image);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ height: '100vh' }} 
    
    className='flex justify-center items-center gap-5
     min-h-screen text-white mainbodybg flex-col'>
      <h2>Ваш Login: {username}</h2>
      <h2>Ваш Email: {email}</h2>
      <h2>Ваш Password: {password}</h2>

      <input type="file" onChange={handleImageUpload} />
      {profileImage && <img className='w-32 h-32' src={profileImage} alt="Profile" />}
    </div>
  );
};

export default Dashboard;
