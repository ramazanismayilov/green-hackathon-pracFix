import React from 'react';
import Navbar from '../components/Navbar';
import ProfilePage from '../components/ProfilePage';

function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col gap-5">
        <Navbar />
        <ProfilePage />
    </div>
  );
}

export default Page;
