import { Plugin } from "@elizaos/core";
import { search } from "./actions/search";

export const depinPlugin: Plugin = {
    name: "depin",
    description: "depin plugin",
    actions: [
        search,
        /* custom actions */
    ],
    evaluators: [
        /* custom evaluators */
    ],
    providers: [],
    services: [
        /* custom services */
    ],
};
