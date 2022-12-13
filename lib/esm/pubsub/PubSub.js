export default class PubSubClass {
    tracker = {};
    constructor() {
        // The tracker variable will have all key-value pair to handle events
        // Key - representing the event name that will be published
        // Value - an array of all callback function associated to the event
    }
    /**
     * Subscribe a function tgat is triggered when a specific (recognized as a string) event is published.
     */
    subscribe(eventName, cb) {
        if (this.tracker[eventName]) {
            // We can have a multiple callback functions for a specific event
            this.tracker[eventName].push(cb);
        }
        else {
            // If the event not exists yet we create it with the associated callback function
            this.tracker[eventName] = [cb];
        }
        return {
            // Return a method that will unsubscribe the event by deleting the callback funtion ass
            unsubscribe: () => {
                const cbs = this.tracker[eventName];
                const index = cbs.indexOf(cb);
                if (index > -1) {
                    cbs.splice(index, 1);
                }
            },
        };
    }
    /**
     * Publishes an avent and call all function that subscribed to this event
     * We pass all arguments to the callback. We can pass data the callback
     */
    publish(eventName, ...args) {
        const cbs = this.tracker[eventName];
        if (Array.isArray(cbs)) {
            cbs.forEach((cb) => {
                cb.apply(null, args);
            });
        }
    }
}
