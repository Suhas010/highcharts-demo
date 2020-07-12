import React from 'react';
import { Switch, Route} from 'react-router-dom';
import SlideOne from '../examples/waterfall/Waterfall';
import WaterfallChart from '../examples/OneRight';
import SlideThree from '../examples/SlideThree';
import BasicLine from '../examples/line/BasicLine';
import OneRight from '../examples/OneRight';
import { ROUTE } from '../../utils/routes';
import ClickableLine from '../examples/line/ClickableLine';
import LineWithAnnotation from '../examples/line/LineWithAnnotation';
import BasicArea from '../examples/area/AreaWithNegativeValue';
import BasicBar from '../examples/Bar/BasicBar';
import BarComparison from '../examples/Bar/BarComparioson';
const ContentContainer = ({props : { history :{ push }}}) => (
  <div className="App">
    <Switch>
      <Route path={ROUTE.ROOT} exact={true} component={()=>(<>{push(ROUTE.WATERFALL)}</>)} />
      <Route path={ROUTE.WATERFALL} exact={true} component={SlideOne} />
      <Route path={ROUTE.WATERFALL_THEAM} exact={true} component={WaterfallChart} />
      <Route path={ROUTE.BASIC_LINE} exact={true} component={BasicLine} />
      <Route path={ROUTE.CLICKABLE_LINE} exact={true} component={ClickableLine} />
      <Route path={ROUTE.WITH_ANNOTATION} exact={true} component={LineWithAnnotation} />

      <Route path={ROUTE.BASIC_AREA} exact={true} component={BasicArea} />
      <Route path={ROUTE.BASIC_BAR} exact={true} component={BasicBar} />
      <Route path={ROUTE.BAR_COMP} exact={true} component={BarComparison} />
      
      <Route path={ROUTE.BAR} exact={true} component={OneRight} />
      <Route path={ROUTE.slideThree} exact={true} component={SlideThree} />
    </Switch>
  </div>
);

export default ContentContainer;