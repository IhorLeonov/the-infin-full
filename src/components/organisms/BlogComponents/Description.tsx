import React from 'react';
import styles from '../../../styles/components/organisms/Blog/Description.module.scss';
import clsx from 'clsx';

import { Section } from '@/components/atoms/Section';

import LargeImage from '../LargeImage';
import Avatar from '@/components/molecules/Avatar';
import Socials from '@/components/molecules/Socials';

interface DescriptionProps {}

export default function Description({}: DescriptionProps) {
  return (
    <Section type="ghost" className={styles.section}>
      <div className={styles.container}>
        <h4 className={styles.title}>Introduction</h4>

        <p className={styles.p}>
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
          vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
          varius id.
        </p>

        <p className={styles.p}>
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
          mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis
          fusce augue enim. Quis at habitant diam at. Suscipit tristique risus,
          at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
          sodales id est ac volutpat.
        </p>

        <LargeImage
          className={styles.image}
          mobileImage="/images/Blog/description-mobile.png"
          desctopImage="/images/Blog/description.png"
          alt="work meeting"
          scale={false}
        />

        <p className={styles.caption}>“Image caption goes here”</p>

        <p className={styles.p}>
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </p>

        <p className={styles.p}>
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna. Viverra purus et erat auctor
          aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
          aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
          ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget
          nunc lectus in tellus, pharetra, porttitor.
        </p>

        <p className={clsx(styles.p, styles.quote)}>
          &quot;Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
          mauris id. Non pellentesque congue eget consectetur turpis. Sapien,
          dictum molestie sem tempor. Diam elit, orci, tincidunt aenean
          tempus.&quot;
        </p>

        <p className={styles.p}>
          Tristique odio senectus nam posuere ornare leo metus, ultricies.
          Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
          Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit
          accumsan. Cursus viverra aenean magna risus elementum faucibus
          molestie pellentesque. Arcu ultricies sed mauris vestibulum.
        </p>

        <h4 className={clsx(styles.title, styles.bottomTitle)}>Conclusion</h4>

        <p className={styles.p}>
          Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
          scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
          blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
          scelerisque amet nulla purus habitasse.
        </p>

        <p className={styles.p}>
          Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
          condimentum mi massa. In tincidunt pharetra consectetur sed duis
          facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
          dictum eget nibh tortor commodo cursus.
        </p>

        <p className={styles.p}>
          Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet.
          Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget
          ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec
          posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla
          adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere
          cursus diam.
        </p>

        <div className={styles.bottomBlock}>
          <Avatar
            imageSrc="/images/olivia.png"
            position="Publisher"
            name="Olivia Johnson"
          />
          <div className={styles.socialsBox}>
            <p className={styles.socialsText}>Share this post</p>
            <Socials className={styles.socials} />
          </div>
        </div>
      </div>
    </Section>
  );
}
