import React from 'react';
import { Switch, Route} from 'react-router-dom';
import WaterFall from '../examples/waterfall/Waterfall';
import BasicLine from '../examples/line/BasicLine';
import { ROUTE } from '../../utils/routes';
import ClickableLine from '../examples/line/ClickableLine';
import LineWithAnnotation from '../examples/line/LineWithAnnotation';
import BasicArea from '../examples/area/AreaWithNegativeValue';
import BasicBar from '../examples/Bar/BasicBar';
import BarComparison from '../examples/Bar/BarComparioson';
import BasicPie from '../examples/pie/BasicPie';
import BasicScatter from '../examples/scatter/BasicScatter';
import Scatter3D from '../examples/scatter/Scatter3D';
const ContentContainer = ({props : { history :{ push }}}) => (
  <div className="App">
    <Switch>
      <Route path={ROUTE.ROOT} exact={true} component={()=>(<>{push(ROUTE.WATERFALL)}</>)} />

      <Route path={ROUTE.WATERFALL} exact={true} component={WaterFall} />
      
      <Route path={ROUTE.BASIC_LINE} exact={true} component={BasicLine} />
      
      <Route path={ROUTE.CLICKABLE_LINE} exact={true} component={ClickableLine} />
      <Route path={ROUTE.WITH_ANNOTATION} exact={true} component={LineWithAnnotation} />

      <Route path={ROUTE.BASIC_AREA} exact={true} component={BasicArea} />

      <Route path={ROUTE.BASIC_BAR} exact={true} component={BasicBar} />
      <Route path={ROUTE.BAR_COMP} exact={true} component={BarComparison} />
      
      <Route path={ROUTE.PIE} exact={true} component={BasicPie} />

      <Route path={ROUTE.SCATTER} exact={true} component={BasicScatter} />
      <Route path={ROUTE.SCATTER_3D} exact={true} component={Scatter3D} />

      
    </Switch>
  </div>
);

export default ContentContainer;