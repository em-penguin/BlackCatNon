import React from "react";
import Layout from '../components/modules/Layout';
import Section from '../components/atoms/Section';
import SliderTop from '../components/modules/SliderTop';
import InfoCard from '../components/atoms/InfoCard';
import Container from '../components/atoms/Container';

const BlogStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const home = () => <div>
  <Layout title="Home page.">
    <SliderTop />
    <Container>
      <Section title="BLOG" link="/" more="もっと見る">
        <div style={ BlogStyle }>
          <InfoCard
            link="/"
            img="../static/img/cards/01.jpg"
            title="ノンちゃん"
            note="お気に入りのお布団でスヤスヤしているノンちゃん"
          />
          <InfoCard
            link="/"
            img="../static/img/cards/01.jpg"
            title="ノンちゃん"
            note="お気に入りのお布団でスヤスヤしているノンちゃん"
          />
          <InfoCard
            link="/"
            img="../static/img/cards/01.jpg"
            title="ノンちゃん"
            note="お気に入りのお布団でスヤスヤしているノンちゃん"
          />
        </div>
      </Section>
      <Section title="TWITTER" link="/" more="もっと見る">
        <a class="twitter-timeline" data-width="600" data-height="600" data-theme="light" href="https://twitter.com/moti_meron?ref_src=twsrc%5Etfw">Tweets by moti_meron</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Section>
    </Container>
  </Layout>
</div>
export default home; 