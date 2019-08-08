import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter} from 'react-router-dom';
import SlideRenderer from '../slideRenderer'
import { ROUTE, NAV_ROUTE } from '../../utils/routes';
import KeyListener from '../helpers/KeyEventListener';
import SlideOne from '../examples/SlideOne';
import SlideTwo from '../examples/SlideTwo';
import SlideThree from '../examples/SlideThree';
import OneLeft from '../examples/OneLeft';
import OneRight from '../examples/OneRight';
import { Icon } from 'antd';
import './index.css'
const Navogator = styled.div`
  display: block;
  position: fixed;
  bottom: 15%;
  right: 2%;
  width: 50px;
  height: 47px;
  border: 1px solid #000;
  border-radius: 16px;
  background: beige;
`;
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

  getNavigator = () => {
    return (
      <Navogator>
        <Icon type="caret-left" className="arrow-left"/> 
        <Icon type="caret-up" className="arrow-up"/>
        <Icon type="caret-down" className="arrow-down"/> 
        <Icon type="caret-right" className="arrow-right"/> 
      </Navogator>
    )
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
        {this.getNavigator()}
      </KeyListener>
    )
  }
}

export default withRouter(SlideController);
