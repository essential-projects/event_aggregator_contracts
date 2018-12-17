export class Subscription {

  public readonly id: string;
  public readonly eventName: string;
  public readonly callback: Function;

  constructor(id: string, eventName: string, callback: Function) {
    this.id = id;
    this.eventName = eventName;
    this.callback = callback;
  }
}
