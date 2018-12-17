export class Subscription {

  public readonly id: string;
  public readonly eventName: string;
  public readonly callback: Function;
  public readonly onlyReceiveOnce: boolean;

  constructor(id: string, eventName: string, callback: Function, onlyReceiveOnce: boolean = false) {
    this.id = id;
    this.eventName = eventName;
    this.callback = callback;
    this.onlyReceiveOnce = onlyReceiveOnce;
  }
}
