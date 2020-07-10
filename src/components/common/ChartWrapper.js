import React from 'react';
import { Card } from 'antd';
import "./index.css";

const ChartWrapper = ({children}) => (
  <Card hoverable>
    {children}
  </Card>
)


export default ChartWrapper;