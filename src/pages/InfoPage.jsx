import React, { useState } from 'react';
import '../styles/pages/InfoPage.scss';
import InfoHeader from '../components/Info/InfoHeader';
import InputLocation from '../components/Info/InputLocation';
import InputStyle from '../components/Info/InputStyle';

const InfoPage = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [location, setLocation] = useState(null);
    const [styles, setStyles] = useState([]);

    return (
      <div className="InfoPage--Wrapper">
        <InfoHeader seqeunce={pageNumber} />
        {pageNumber === 1 && (
          <InputLocation
            setPageNumber={setPageNumber}
            location={location}
            setLocation={setLocation}
          />
        )}
        {pageNumber === 2 && (
          <InputStyle
            setPageNumber={setPageNumber}
            styles={styles}
            setStyles={setStyles}
          />
        )}
      </div>
    );
};

export default InfoPage;