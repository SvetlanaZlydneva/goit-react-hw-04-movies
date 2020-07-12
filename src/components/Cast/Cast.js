/*eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import CastItem from './CastItem';
import defaultImage from './defaultImg.jpg';
import styles from './Cast.module.css';

const basePath = 'https://image.tmdb.org/t/p/original';

const Cast = ({ cast }) => (
  <Container>
    <ul className={styles.List}>
      {cast.map(({ cast_id, character, name, profile_path }) => (
        <li className={styles.Item} key={cast_id}>
          <CastItem
            character={character}
            name={name}
            profilePath={profile_path ? basePath + profile_path : defaultImage}
          />
        </li>
      ))}
    </ul>
  </Container>
);

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Cast;
