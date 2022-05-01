import { Meteor } from 'meteor/meteor';

import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';

/**
  * URL base del la aplicación
  * @constant
  * @type {String}
  */
const BASE_URL = Meteor.absoluteUrl();

const DownloadFile = ({ downloadURL, nombreArchivo }) => {
  const downloadTag = useRef();

  useEffect(() => {
    if (downloadURL) {
      downloadTag
        .current
        .href = downloadURL;

      if (nombreArchivo) {
        downloadTag.current.download = nombreArchivo;
      }

      downloadTag
        .current
        .click();
    }
  }, [downloadURL]);

  return (
    <a
      style={{ display: 'none' }}
      href={BASE_URL}
      ref={(reference) => {
        downloadTag.current = reference;
      }}
    >
    &nbsp;
    </a>
  );
};

DownloadFile.defaultProps = {
  downloadURL: null,
  nombreArchivo: null,
};

DownloadFile.propTypes = {
  downloadURL: PropTypes.string,
  nombreArchivo: PropTypes.string,
};

export default DownloadFile;
