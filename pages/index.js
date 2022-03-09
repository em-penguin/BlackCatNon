import React from "react";
import Layout from '../components/modules/Layout';
import Section from '../components/atoms/Section';
import SliderTop from '../components/modules/SliderTop';
import InfoCard from '../components/atoms/InfoCard';
import PhotoCard from '../components/atoms/PhotoCard';

const home = () => <div id="index">
  <Layout title="Home page.">
    <SliderTop />
    <Section title="ABOUT" link="./about" more="もっと見る">
      <p>黒猫ノンちゃんについて
        最近の出来ごと
      </p>
    </Section>
    <Section title="BLOG" link="./blog" more="もっと見る">
      <div id="blog">
        <InfoCard
          link="/"
          img="../static/img/cards/01.jpg"
          title="段ボールがお気に入り"
          note="角にアゴを乗せて寝るのが最近のお気に入りです"
        />
        <InfoCard
          link="/"
          img="../static/img/cards/02.jpg"
          title="ノンちゃん"
          note="お気に入りのお布団でスヤスヤしているノンちゃん"
        />
        <InfoCard
          link="/"
          img="../static/img/cards/03.jpg"
          title="ノンちゃん"
          note="お気に入りのお布団でスヤスヤしているノンちゃん"
        />
        <InfoCard
          link="/"
          img="../static/img/cards/04.jpg"
          title="ノンちゃん"
          note="お気に入りのお布団でスヤスヤしているノンちゃん"
        />
        <InfoCard
          link="/"
          img="../static/img/cards/05.jpg"
          title="ノンちゃん"
          note="お気に入りのお布団でスヤスヤしているノンちゃん"
        />
        <InfoCard
          link="/"
          img="../static/img/cards/06.jpg"
          title="ノンちゃん"
          note="お気に入りのお布団でスヤスヤしているノンちゃん"
        />
      </div>
    </Section>
    <Section title="ONLINE SHOP" link="https://moti-meron.booth.pm/" more="ONLINE SHOP">
      <div id="shop">
        <PhotoCard
          link="/"
          img="../static/img/shop/01.png"
          note="お気に入りのお布団でスヤスヤしているノンちゃん"
        />
        <PhotoCard
          link="/"
          img="../static/img/shop/02.png"
          note="お気に入りのお布団でスヤスヤしているノンちゃん"
        />
        <PhotoCard
          link="/"
          img="../static/img/shop/03.png"
          note="お気に入りのお布団でスヤスヤしているノンちゃん"
        />
        <PhotoCard
          link="/"
          img="../static/img/shop/04.png"
          note="お気に入りのお布団でスヤスヤしているノンちゃん"
        />
        <PhotoCard
          link="/"
          img="../static/img/shop/05.png"
          note="お気に入りのお布団でスヤスヤしているノンちゃん"
        />
        <PhotoCard
          link="/"
          img="../static/img/shop/06.png"
          note="お気に入りのお布団でスヤスヤしているノンちゃん"
        />
      </div>
    </Section>
    <Section title="TWITTER" link="https://twitter.com/moti_meron" more="もっと見る">
      <a class="twitter-timeline" data-width="600" data-height="600" data-theme="light" href="https://twitter.com/moti_meron?ref_src=twsrc%5Etfw">Tweets by moti_meron</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </Section>
  </Layout >
</div >
export default home; 