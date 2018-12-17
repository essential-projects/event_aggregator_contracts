import {ISubscription} from './isubscription';

export interface IEventAggregator {
  publish(event: string | any, data?: any): void;
  subscribe(event: string | Function, callback: Function): ISubscription;
  subscribeOnce(event: string | Function, callback: Function): ISubscription;
  unsubscribe(subscription: ISubscription): void;
}
