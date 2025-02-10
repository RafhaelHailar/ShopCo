import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("marketing/page.tsx"),
    route("shop", "shop/page.tsx")
] satisfies RouteConfig;
