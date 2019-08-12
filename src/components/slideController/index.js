import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter} from 'react-router-dom';
import { ROUTE, NAV_ROUTE } from '../../utils/routes';
import KeyListener from '../helpers/KeyEventListener';
import HomePage from '../examples/HomePage';
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
  bottom: 6%;
  right: 2%;
  width: 50px;
  height: 47px;
  border: 1px solid #ecb6b6;
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

  ifActive = (key) => {
    const { history : { push }, location : { pathname} } = this.props;
    let navigation = NAV_ROUTE['/'];
    if (pathname.length > 1) {
      navigation = NAV_ROUTE[pathname.replace('/', '')];
    }
    if (!navigation) {
      return false;
    }
    return navigation[key];
  }

  getNavigator = () => {
    return (
      <Navogator>
        <Icon type="caret-left" className={ this.ifActive("ArrowLeft") ? "active arrow-left" :"arrow-left"}/> 
        <Icon type="caret-up" className={ this.ifActive("ArrowUp") ? "active arrow-up" :"arrow-up"}/>
        <Icon type="caret-down" className={ this.ifActive("ArrowDown") ? "active arrow-down" :"arrow-down"}/> 
        <Icon type="caret-right" className={ this.ifActive("ArrowRight") ? "active arrow-right" :"arrow-right"}/> 
      </Navogator>
    )
  }

  render() {
    return(
      <KeyListener handleKeyPress={this.handleKeyPress}>
        <div className="App">
          <Switch>
            <Route path={ROUTE.root} exact={true} component={HomePage} />
            <Route path={ROUTE.slideOne} exact={true} component={SlideOne} />
            <Route path={ROUTE.OneLeft} exact={true} component={OneLeft} />
            <Route path={ROUTE.OneRight} exact={true} component={OneRight} />
            <Route path={ROUTE.slideTwo} exact={true} component={SlideTwo} />
            <Route path={ROUTE.slideThree} exact={true} component={SlideThree} />
          </Switch>
        </div>
        {this.getNavigator()}
      </KeyListener>
    )
  }
}

export default withRouter(SlideController);
