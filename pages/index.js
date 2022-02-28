import React from "react";
import Layout from '../components/Layout';
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';
import SliderTop from '../components/SliderTop';
import Bookdata from '../components/Bookdata';


const home = () => <div>
  <Layout header="Home" title="Home page.">
    <SliderTop />
    <Navbar />
    <Container>
      <Bookdata number={ 3 } />
    </Container>
  </Layout>
</div>
export default home;