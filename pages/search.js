import Layout from '../components/Layout';
import Bookfind from '../components/Bookfind';
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';


export default () => (
  <Layout header="search" title="search page.">
    <Navbar />
    <Container>
      <Bookfind />
    </Container>
  </Layout>
);