import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import AboutLayout from './AboutLayout';

const AboutRoute = (
  <Route path="about" component={AboutLayout} />
);

export default AboutRoute;
