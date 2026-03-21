type DomainEvent = {
  name: string;
  payload: any;
};

type EventHandler = (payload: any) => Promise<void> | void;

export class EventBus {
  private eventQueue: DomainEvent[] = [];
  private subscribers: Record<string, EventHandler[]> = {};

  publish(event: string, payload: any) {
    this.eventQueue.push({ name: event, payload });
  }

  subscribe(event: string, handler: EventHandler) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(handler);
  }

  async consume() {
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift()!;
      const handlers = this.subscribers[event.name] || [];
      for (const handler of handlers) {
        await handler(event.payload);
      }
    }
  }
}