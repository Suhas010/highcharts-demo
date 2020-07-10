export const ROUTE = {
  ROOT: '/',
  WATERFALL: '/waterfall',
  WATERFALL_THEAM: '/waterfall-with-theam',
  BASIC_LINE: '/basic-line',
  CLICKABLE_LINE: '/clickable-line',
  WITH_ANNOTATION: '/line-with-annotation',
  BAR: '/bar',
  PAI: '/pai',
  HEATMAP: '/heatmap',
}
export const NAV_ROUTE = [
  {
    title: "Waterfall Graph",
    path: ROUTE.WATERFALL,
    subMenu: [
      {
        title: "Waterfall",
        path: ROUTE.WATERFALL
      },
      {
        title: "Waterfall with Theam",
        path: ROUTE.WATERFALL_THEAM
      }
    ]
  },
  {
    title: "Line",
    path: ROUTE.BASIC_LINE,
    subMenu: [
      {
        title: "Basic Line Graph",
        path: ROUTE.BASIC_LINE,
      },
      {
        title: "Clickable Line Graph",
        path: ROUTE.CLICKABLE_LINE,
      },
      {
        title: "Line Graph with Annotation",
        path: ROUTE.WITH_ANNOTATION,
      },
    ]
  },
  {
    title: "Bar Graph",
    path: ROUTE.BAR,
    subMenu: []
  }
];

export const name = "suhas";
