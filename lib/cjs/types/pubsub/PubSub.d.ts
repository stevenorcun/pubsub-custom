export default class PubSubClass {
    private tracker;
    constructor();
    /**
     * Subscribe a function tgat is triggered when a specific (recognized as a string) event is published.
     */
    subscribe(eventName: string, cb: () => void): {
        [key: string]: () => void;
    };
    /**
     * Publishes an avent and call all function that subscribed to this event
     * We pass all arguments to the callback. We can pass data the callback
     */
    publish(eventName: string, ...args: any): void;
}
//# sourceMappingURL=PubSub.d.ts.map