require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

/**
 * Get Images metadata
 */
let imageData = require('../data/imageData.json');

// add url field to each image
for (let singleImage of imageData) {
  singleImage.imageUrl = require('../images/' + singleImage.fileName);
}

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
