import React from 'react';
import Trend from 'react-trend';



const TrendLine = () => (
    <Trend
      smooth
      autoDraw
      autoDrawDuration={4000}
      autoDrawEasing="ease-out"
      data={[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]}
      gradient={['red', 'orange', 'yellow']}
      radius={8.6}
      strokeWidth={1.9}
      strokeLinecap={'butt'}
    />
);

export default TrendLine;