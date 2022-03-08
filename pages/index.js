import React from "react";
import Layout from '../components/modules/Layout';
import Section from '../components/atoms/Section';
import SliderTop from '../components/modules/SliderTop';
import InfoCard from '../components/atoms/InfoCard';

const home = () => <div id="index">
  <Layout title="Home page.">
    <SliderTop />
    <Section title="NEWS" link="./news" more="もっと見る">
      <p>ニュース</p>
    </Section>
    <Section title="BLOG" link="./blog" more="もっと見る">
      <div id="blog">
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
    <Section title="TWITTER" link="https://twitter.com/moti_meron" more="もっと見る">
      <a class="twitter-timeline" data-width="600" data-height="600" data-theme="light" href="https://twitter.com/moti_meron?ref_src=twsrc%5Etfw">Tweets by moti_meron</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </Section>
  </Layout>
</div>
export default home; 