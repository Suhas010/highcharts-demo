export const ROUTE = {
  root: '/',
  slideOne: '/slideOne',
  OneLeft: '/OneLeft',
  OneRight: '/OneRight',
  slideTwo: '/slideTwo',
  slideThree: '/slideThree',
  

}
export const NAV_ROUTE = {
  '/': {
    path: ROUTE.root,
    ArrowDown: ROUTE.slideOne,
  },
  slideOne: {
    path: ROUTE.slideOne,
    ArrowDown: ROUTE.slideTwo,
    ArrowUp: ROUTE.root,
    ArrowLeft: ROUTE.OneLeft,
    ArrowRight: ROUTE.OneRight
  },
  OneLeft: {
    ArrowRight: ROUTE.slideOne,
  },
  OneRight: {
    ArrowLeft: ROUTE.slideOne,
  },
  slideTwo: {
    path: ROUTE.slideTwo,
    ArrowDown: ROUTE.slideThree,
    ArrowUp: ROUTE.slideOne
  },
  slideThree: {
    path: ROUTE.slideThree,
    ArrowUp: ROUTE.slideTwo
  }

}

export const name = "suhas";
