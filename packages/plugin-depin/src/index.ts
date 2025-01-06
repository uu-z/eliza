import type { Plugin } from "@elizaos/core";

import { depinDataProvider } from "./providers/depinData";
import { depinProjects } from "./actions/depinProjects";
import { currentWeather } from "./actions/currentWeather";
import { weatherForecast } from "./actions/weatherForecast";
import { externalActionTest } from "./actions/externalActionTest";

export const depinPlugin: Plugin = {
    name: "depin",
    description: "DePIN plugin",
    providers: [depinDataProvider],
    evaluators: [],
    services: [],
    actions: [
        externalActionTest,
        depinProjects,
        // currentWeather,
        // weatherForecast,
    ],
};

export default depinPlugin;
