import React from 'react';
import PropTypes from 'prop-types';
import styles from './CastItem.module.css';

const CastItem = ({ character, name, profilePath }) => (
  <>
    <img src={profilePath} alt={name} />
    <p className={styles.Person}>
      <span className={styles.Name}>{name}</span>
      {character && <span>/{character}</span>}
    </p>
  </>
);

CastItem.propTypes = {
  character: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profilePath: PropTypes.string.isRequired,
};

export default CastItem;
