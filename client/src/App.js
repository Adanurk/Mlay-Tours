import TourCard from './components/shared/TourCard/TourCard';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/LandingPage/Home.jsx';
import Tours from './pages/Tours/Tours.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import PlanTrip from './pages/PlanTrip/PlanTrip.jsx';
import SingleTour from './pages/Tours/SingleTour.jsx';
import Admin from './pages/Admin/Admin.jsx';
import FAQ from './pages/FAQ/Faq.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import { Navbar, Footer } from './components/export';
// import { TourProvider } from './context/TourContext';

const galleryImages = [
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8a95e051-7c9e-40ed-b0dc-cc7d3d9e569b%2Fwalking-up-the-route.jpg?id=0f20970d-e42f-41d0-b32e-128c3108b25a&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Feb0ead3d-af46-4fd9-88e4-1271581b638b%2Fon-the-route-jungle.jpg?id=628867b5-80ed-460c-8f8c-0e73695a3349&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd9f2dbcb-2863-40ac-9aa9-8fbe7df9c54e%2Fpeak-kilimanjaro.jpg?id=edca84ae-5521-4473-8ed8-1374d2bf446b&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F84df5a47-0ba5-41b6-b3e5-1688dc552ae5%2Fkilimanjaro-peak3.jpg?id=332c20f0-6311-44ac-a6ae-fb274ebbf95d&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F194a32c7-a3e5-4c9f-bb0f-5db99fc9d4c1%2Fpeak-of-kilimanjaro2.jpg?id=81bf3d21-6a1e-43ad-baf9-92df416d7658&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7d7b7733-769f-4c74-a55a-fde5e4869f46%2FShira-tourIMG-0629.jpg?id=0a6a6a84-8d90-4481-abf6-e3fd9d5a7c95&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4b5d58c1-b14f-4554-99cb-a617cb073928%2Fkilimanjaro-peak5.jpg?id=1aa18720-d005-4e8d-8abc-470da9783302&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F68e8c73b-ef5c-4a97-8f41-bcf2b7be4706%2Fkilimanjaro-peak6..jpg?id=43b43548-90b5-46e5-91e1-63482def0fca&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd9b5a0e3-33f6-431c-9fe6-4aff7ca226b3%2Fkilimanjaro-peak7.jpg?id=fbfefc89-714e-4113-8224-1a09fdf30dd8&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6b095744-5431-456a-b9ec-964a5a911c29%2Fpeter-in-orange-bg-mountain.jpg?id=1628df42-bdab-431d-8426-6241d3a4ed97&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a01ccbe-5c30-4438-860b-1d9f28618eae%2Fnative-man-kilimanjaro.jpg?id=519d3844-0af8-4ac0-aa25-28ce72a97c83&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=970&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F484d2d81-67f7-4c0f-bf13-c6c5d6ca8171%2Fmountain.jpg?id=f2e75608-48e9-494b-9a53-296ff7608de8&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=1430&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fed9b91b7-eb6b-463e-88ab-b9685590a101%2Fgoing-up-the-path.jpg?id=c9ea91dd-185f-4294-b369-b21141b038ab&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F63e578ad-911d-446f-8df0-46a082cbf5f7%2Fgoing-down-the-cave.jpg?id=80e4a5b4-3059-4bc4-b624-c7765eca556b&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F538a9c4a-e754-4be6-9b71-c436a59ffd7f%2Fhuge-tree.jpg?id=ea31d913-8da0-4451-b5ef-206f257f06f4&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff8ac75a6-7fc1-42c2-b0f7-5a7d1a9b5d70%2FTZCH-coffee.jpg?id=d027c703-29e1-4a45-a7c6-7094eb293783&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3d3b2c89-6801-48d8-8180-00cbe927cdcd%2Fpeople-coffee-beans.jpg?id=f0cd9ffa-c9fd-47e9-b9e3-3352960558ff&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9a823447-0f71-49f4-9c57-25e4c4600bfb%2Fpeter-team.jpg?id=82313071-ca1b-4a31-86e1-a1bc731f4a8e&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=1500&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F88cb803d-f493-4ade-ac48-2ef7968086c0%2Fsafari-lions.jpg?id=4215e3c3-fedf-41ac-a44e-de8c67af7e23&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F28156a1c-f077-4b4b-8b4a-bfb2062dea7b%2Fsafari-wildboars.jpg?id=5d0481d5-1332-4c77-8009-7dde3188b86a&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F136b4f3b-a342-47f2-afc7-fd20493f3516%2Fsafari-zebras.jpg?id=1e3f08f0-9d05-4491-bdc1-9ee2e8687fc3&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
  {
    img: 'https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F602bd1bc-b0d5-454a-b708-f0351cb88997%2Fsafari-zebras3.jpg?id=76b2ce19-b28b-4211-8a2a-dcb88a988664&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2',
  },
];

function App() {
  return (
    // <TourProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/tours/:singleTourName" element={<SingleTour />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/category/:type" element={<Tours />} />
        <Route path="/gallery" element={<Gallery galleryImages={galleryImages} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plantrip" element={<PlanTrip />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/resetpassword/:token" element={<ResetPassword />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
    // </TourProvider>
  );
}

export default App;
