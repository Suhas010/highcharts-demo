import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import SlideRenderer from '../slideRenderer'
import { ROUTE, NAV_ROUTE } from '../../utils/routes';
import KeyListener from '../helpers/KeyEventListener';
import SlideOne from '../examples/SlideOne';
import SlideTwo from '../examples/SlideTwo';
import SlideThree from '../examples/SlideThree';
import OneLeft from '../examples/OneLeft';
import OneRight from '../examples/OneRight';

class SlideController extends Component {
  
  handleKeyPress = ({ code }) => {
    const { history : { push }, location : { pathname} } = this.props;
    console.log(code, pathname, "@@@", this.props, NAV_ROUTE[pathname.replace('/', '')])
    let navigation = NAV_ROUTE['/'];
    if (pathname.length > 1) {
      navigation = NAV_ROUTE[pathname.replace('/', '')];
    }

    console.log(navigation, "$$")
    if (!navigation ||!navigation[code]) {
      return;
    }
    push(navigation[code]);
  }

  render() {
    return(
      <KeyListener handleKeyPress={this.handleKeyPress}>
        <div className="App">
          <Switch>
            <Route path={ROUTE.root} exact component={SlideRenderer} />
            <Route path={ROUTE.slideOne} exact component={SlideOne} />
            <Route path={ROUTE.OneLeft} exact component={OneLeft} />
            <Route path={ROUTE.OneRight} exact component={OneRight} />
            <Route path={ROUTE.slideTwo} exact component={SlideTwo} />
            <Route path={ROUTE.slideThree} exact component={SlideThree} />
          </Switch>
        </div>
      </KeyListener>
    )
  }
}

export default withRouter(SlideController);
