type DomainEvent = {
  name: string;
  payload: any;
};

export class EventBus {
  private eventQueue: DomainEvent[] = [];

  publish(event: string, payload: any) {
    this.eventQueue.push({ name: event, payload });
  }

  async consume() {
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift()!;
      console.log("Procesando evento:", event.name, event.payload);
    }
  }
}