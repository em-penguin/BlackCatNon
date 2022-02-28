import Layout from '../components/Layout';
import Bookdata from '../components/Bookdata';
import Navbar from '../components/Navbar';
import Container from '@material-ui/core/Container';


export default () => (
    <Layout header="book" title="book data.">
        <Navbar />
        <Container>
            <Bookdata number={ 10 } />
        </Container>
    </Layout>
);
