import {IEvent} from './ievent';

export interface IErrorEvent extends IEvent {
    error: any;
    message: string;
}
