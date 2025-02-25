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
    des: "our works",
    route: "/ourworks",
  },
  services: {
    des: "services",
    route: "/services",
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
