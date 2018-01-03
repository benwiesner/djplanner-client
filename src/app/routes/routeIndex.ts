import { clientRoute } from "./clientRoute"
import { navigationRoute } from "./navigationRoute"
import { homeRoute } from "./homeRoute"

const tempRoutes = []

export const routes = tempRoutes.concat(clientRoute, navigationRoute, homeRoute);

