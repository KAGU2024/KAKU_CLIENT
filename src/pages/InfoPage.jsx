import React, { useState } from 'react';
import '../styles/pages/InfoPage.scss';
import InfoHeader from '../components/Info/InfoHeader';
import InputLocation from '../components/Info/InputLocation';

const InfoPage = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [location, setLocation] = useState(null);

    console.log(location);
    return (
      <div className='InfoPage--Wrapper'>
        <InfoHeader seqeunce={pageNumber} />
        {pageNumber === 1 && 
            <InputLocation 
            setPageNumber={setPageNumber} 
            location={location}
            setLocation={setLocation}/>}
      </div>
    );
};

export default InfoPage;