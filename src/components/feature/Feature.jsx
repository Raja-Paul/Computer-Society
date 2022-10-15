import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="cs__features-container__feature">
    <div className="cs__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="cs__features-container_feature-text">
      <p>{text}</p>
      <h1>this is A PR</h1>
      <h2>this is second pr</h2>
    </div>
  </div>
);

export default Feature;