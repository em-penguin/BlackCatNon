import React from "react";
import Layout from '../components/Layout';
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';

const home = () => <div>
  <Layout header="Home" title="Home page.">
    <Navbar />
    <Container>
      内容
    </Container>
  </Layout>
</div>
export default home;