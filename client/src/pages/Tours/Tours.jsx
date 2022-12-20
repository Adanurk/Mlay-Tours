import { Contacts, TourCard } from '../../components/export';
import { Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
//import TourContext from '../../context/TourContext';
import React, { useEffect, useContext, useState } from 'react';
import './_Tours.scss';
import axios from 'axios';

export default function Tours() {
  //const { setTourData, loadToursData, tourData } = useContext(TourContext);
  const [tourData, setTourData] = useState([]);

  const { type } = useParams();

  //Get all the Tours data and check for the status
  const loadToursData = async () => {
    const allTours = await axios.get(`http://localhost:4000/api/tours`);
    if (allTours.status === 200) {
      setTourData(allTours.data.data);
    } else {
      console.error('Something went wrong');
    }
  };

  //Get the Tours data according to the type of the tour and check for the status
  const loadToursDataByType = async () => {
    const filteredToursByType = await axios.get(`http://localhost:4000/api/tours/category/${type}`);
    console.log(filteredToursByType.data);
    if (filteredToursByType.status === 200) {
      setTourData(filteredToursByType.data);
      //this if statement is to redirect to the tour page if there is only one tour of that type
      if (filteredToursByType.data.length === 1) {
        console.log('its JUST ONE');
        window.location.href = `/tours/${filteredToursByType.data[0]._id}`;
      }
    } else {
      console.error('Something went wrong');
    }
  };

  //During the first load of the page, load all the tours data or by type

  useEffect(() => {
    if (type) {
      loadToursDataByType();
      window.scrollTo(0, 0);
    } else {
      loadToursData();
      window.scrollTo(0, 0);// add this line to scroll to the top when you render your components 
    }
  }, [type]);

  return (
    <div className="container1">
      <div className='container2'>
        <div className='leftSide'>
          <img style={{height:"200px", width:"auto"}} src={require("http://thenewcode.com/assets/images/responsive-design-comparison.jpg")} alt="" />
        </div>
        <Container
        className='rightSide' 
         >
        
          <Grid className='gridRight'
          sx={{ position: 'relative', top:"80px", marginBottom:"80px", overflowY:"scroll"}}
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            {tourData.map((tour) => {
              return (
                <Grid item xs={12} sm={12} md={12} lg={5} margin="0.2em">
                  <TourCard
                    mainImg={tour.imgCover}
                    days={tour.days}
                    name={tour.name}
                    tour={tour.name}
                    subtitle={tour.subtitle}
                    difficulty={tour.difficulty}
                    scenery={tour.scenery}
                    id={tour._id}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
        
      </div>
      <Contacts />
    </div>
  );
}
