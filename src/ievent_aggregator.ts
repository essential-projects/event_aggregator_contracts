import {Subscription} from './isubscription';

export interface IEventAggregator {
  publish(event: string, data?: any): void;
  subscribe(event: string, callback: Function): Subscription;
  subscribeOnce(event: string, callback: Function): Subscription;
  unsubscribe(subscription: Subscription): void;
}
