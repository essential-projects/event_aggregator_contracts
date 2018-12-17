export type EventCallback = (eventPayload: any, eventName: string) => void | Promise<void>;

export class Subscription {

  public readonly id: string;
  public readonly eventName: string;
  public readonly callback: EventCallback;
  public readonly onlyReceiveOnce: boolean;

  constructor(id: string, eventName: string, callback: EventCallback, onlyReceiveOnce: boolean = false) {
    this.id = id;
    this.eventName = eventName;
    this.callback = callback;
    this.onlyReceiveOnce = onlyReceiveOnce;
  }
}
