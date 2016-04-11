import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import WorkShowLayout from './WorkShowLayout';

const WorkRoute = (
  <Route path="work/:wid" component={WorkShowLayout} />
);

export default WorkRoute;
