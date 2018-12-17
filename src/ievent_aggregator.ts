import {Subscription} from './isubscription';

export interface IEventAggregator {
  publish(event: string | any, data?: any): void;
  subscribe(event: string | Function, callback: Function): Subscription;
  subscribeOnce(event: string | Function, callback: Function): Subscription;
  unsubscribe(subscription: Subscription): void;
}
