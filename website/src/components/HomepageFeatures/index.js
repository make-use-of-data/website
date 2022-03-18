import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Data Science Notes',
    path: "/data-science-notes/intro",
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        An open-source collection of notes across varying topics on data science.
      </>
    ),
  },
  {
    title: 'Making Use of Data',
    path: "/making-use-of-data/intro",
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        How can data be leveraged to better organizational bottom lines?
      </>
    ),
  },
  {
    title: 'OneLoneDatum Blog',
    path: "/blog",
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Why is the Datum so lonely?
      </>
    ),
  },
];

function Feature({Svg, title, description, path}) {
  return (
    <div className={clsx('col col--4')}>
      <Link className={styles.link} to={path}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
          </Link>
      </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
