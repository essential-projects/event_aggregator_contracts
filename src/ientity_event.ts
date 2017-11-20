import {IEntity} from '@essential-projects/core_contracts';
import {IDataEvent} from './idata_event';

export interface IEntityEvent extends IDataEvent {
  source: IEntity;
}
