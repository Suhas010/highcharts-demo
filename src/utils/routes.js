export const ROUTE = {
  ROOT: '/',
  WATERFALL: '/waterfall',
  WATERFALL_THEAM: '/waterfall-with-theam',
  
  BASIC_LINE: '/basic-line',
  CLICKABLE_LINE: '/clickable-line',
  WITH_ANNOTATION: '/line-with-annotation',
  
  AREA: "/area",
  BASIC_AREA: "/basic-area",
  ARE_NEGATIVE: "/area-with-negative",
 
  BAR: "/bar",
  BASIC_BAR: "/basic-bar",
  BAR_COMP: "/bar-comparison",

  PIE: '/pie',

  SCATTER: '/scatter',
  SCATTER_3D: '/scatter-3d-bubble',
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
    title: "Area",
    path: ROUTE.AREA,
    subMenu: [
      {
        title: "Basic Area",
        path: ROUTE.BASIC_AREA
      }
    ]
  },
  {
    title: "Bar",
    path: ROUTE.BAR,
    subMenu: [
      {
        title: "Basic Bar",
        path: ROUTE.BASIC_BAR
      },
      {
        title: "Comparison Bar",
        path: ROUTE.BAR_COMP
      }
    ]
  },
  {
    title: "Pie",
    path: ROUTE.PIE,
    subMenu: []
  },
  {
    title: "Scatter",
    path: ROUTE.SCATTER,
    subMenu: [
      {
      title: "Basic Scatter",
      path: ROUTE.SCATTER
      },
      {
        title: "3D Bubble Scatter",
        path: ROUTE.SCATTER_3D
      }
    ]
  }
];

export const name = "suhas";
