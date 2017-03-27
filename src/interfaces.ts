export interface IEventAggregator {
  emit(eventName: string, ...args: Array<any>): void;
  on(eventName: string, listener: Function): void;
}