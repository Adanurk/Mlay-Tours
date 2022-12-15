import { Contacts, TourCard } from '../../components/export';
import { Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import TourContext from '../../context/TourContext';
import React, { useEffect, useContext, useState } from 'react';
import './_Tours.scss';
import axios from 'axios';

export default function Tours() {
  //const { setTourData, loadToursData, tourData } = useContext(TourContext);

  const { type } = useParams();
  console.log(type);
  const [tourData, setTourData] = useState([]);

  //Get all the Tours data and check for the status
  const loadToursData = async () => {
    const allTours = await axios.get(`http://localhost:4000/api/tours`);

    if (allTours.status === 200) {
      setTourData(allTours.data.data);
    } else {
      console.error('Something went wrong');
    }
  };
  //During the first load of the page, load all the tours data
  useEffect(() => {
    loadToursData();
    console.log('comming inside');
    //console.log(tourData);
    if (type) {
      const filteredTours = tourData.filter((tour) => tour.type === type);
      console.log(filteredTours);
      setTourData(filteredTours);
      console.log('theFiltered', filteredTours);
    }
  }, []);
  //useEffect(() => {}, []);

  console.log(tourData);

  return (
    <Container sx={{ position: 'relative', marginBottom: '8em', minHeight: '90vh' }}>
      {/* you have to put a position relative to the component, add padding bottom so that
    the footer will be at the bottom of the page , this tip needs to be applied to all the other pages, 
  the ones that have a footer, for example the custom tour page, the about page, the contact page, etc. */}

      <Grid
        sx={{ position: 'relative', top: '7em' }}
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        {tourData.map((tour) => {
          if (tour.type === 'coffee') {
            console.log('coffee');
          }
          return (
            <Grid Item xs={3} margin="0.7em">
              <TourCard
                days={tour.days}
                name={tour.name}
                tour={tour.name}
                subtitle={tour.subtitle}
                difficulty={tour.difficulty}
                scenery={tour.scenery}
                id={tour.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
