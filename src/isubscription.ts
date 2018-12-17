export type EventReceivedCallback = (eventPayload: any, eventName: string) => void | Promise<void>;

export class Subscription {

  public readonly id: string;
  public readonly eventName: string;
  public readonly callback: EventReceivedCallback;
  public readonly onlyReceiveOnce: boolean;

  constructor(id: string, eventName: string, callback: EventReceivedCallback, onlyReceiveOnce: boolean = false) {
    this.id = id;
    this.eventName = eventName;
    this.callback = callback;
    this.onlyReceiveOnce = onlyReceiveOnce;
  }
}
