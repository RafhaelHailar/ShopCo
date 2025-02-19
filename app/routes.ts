import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("marketing/page.tsx"),
    route("shop", "shop/page.tsx"),
    route("product/:productId", "product-details/page.tsx")
] satisfies RouteConfig;
