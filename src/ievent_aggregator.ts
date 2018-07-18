import {ExecutionContext} from '@essential-projects/iam_contracts';
import {ISubscription} from './isubscription';

import {IEvent} from './ievent';

export interface IEventAggregator {
  publish(event: string | any, data?: any): void;
  subscribe(event: string | Function, callback: Function): ISubscription;
  subscribeOnce(event: string | Function, callback: Function): ISubscription;
  createEntityEvent(data: any, source: any, context: ExecutionContext, metadataOptions?: {
    [key: string]: any,
  }): IEvent;
}
