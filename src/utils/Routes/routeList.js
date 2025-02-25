export const Routes = {
  home: {
    des: "home",
    route: "/",
  },
  whoWeAre: {
    des: "who we are",
    route: "/whoweare",
  },
  ourWorks: {
    des: "work",
    route: "/work",
  },
  services: {
    des: "services",
    route: "/casestudy",
  },
  sayHello: {
    des: "say hello",
    route: "/sayhello",
  },
};

export function getRoutesItems() {
  return Routes;
}

export function getCompleteRoute(route) {
  return "/" + route;
}
