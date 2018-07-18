import {IDataEvent} from './idata_event';

export interface IEntityEvent extends IDataEvent {
  source: any;
}
