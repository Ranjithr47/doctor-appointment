import React, { useRef } from 'react';
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';
import Banner from '../components/Banner';

const Home = () => {
  const specialityRef = useRef(null);

  const handleScrollToSpeciality = () => {
    if (specialityRef.current) {
      specialityRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header onBookAppointmentClick={handleScrollToSpeciality} />
      <SpecialityMenu ref={specialityRef} />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
