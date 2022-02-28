import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Image from '../static/Image';

const about = () => <div>
    <Layout header="about" title="about page.">
        <Navbar />
        <Image fname="image.jpeg" size="250" />
        <Image fname="image.jpeg" size="250" />

内容
    </Layout>
</div>
export default about;
