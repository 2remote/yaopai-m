import React from 'react'
import { Route } from 'react-router'

import GrapherShow from './GrapherShowLayout'

const GrapherRoute = (
  <Route path="grapher/:gid" component={GrapherShow} />
)

export default GrapherRoute
