import {
    Action,
    IAgentRuntime,
    Memory,
    State,
    HandlerCallback,
    elizaLogger,
} from "@elizaos/core";

export const search: Action = {
    name: "DEPIN_SEARCH",
    description: "DEPIN_SEARCH",
    similes: ["DEPIN", "DEPIN_SEARCH"],
    examples: [
        [
            {
                user: "user",
                content: { text: "Search for recent AI developments" },
            },
        ],
        [
            {
                user: "user",
                content: { text: "Find news about climate change" },
            },
        ],
    ],
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        // no extra validation needed
        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state?: State,
        options?: { [key: string]: unknown },
        callback?: HandlerCallback
    ) => {
        try {
            const content = message.content;
            elizaLogger.log(`content: ${content}`);

            const response = await fetch("http://localhost:8000/binoai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: content.text,
                }),
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }

            const res = await response.json();

            elizaLogger.log(res);

            callback({
                text: res.data,
            });
            return true;
        } catch (error) {
            console.error("Error", error.message);
            if (callback) {
                callback({ text: `Error: ${error.message}` });
            }
            return false;
        }
    },
};
