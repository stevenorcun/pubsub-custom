The Porject that use contains a PubSub class.

It is based on the Publisher - Subscriber pattern (more documentation here https://oskari.io/blog/event-bus-micro-frontend/)

The PubSub class resumes the key concepts of the PubSub pattern with :

    - A subscribe() method that subscribe to a specific event and will be trigger every time the event is published
    The method return a function unsubscribe that allows to unsubscribe to the specific event.

    - A publish() method that publish event
