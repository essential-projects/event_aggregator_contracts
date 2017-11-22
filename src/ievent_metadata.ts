import {ExecutionContext} from '@essential-projects/core_contracts';

export interface IEventMetadata {
  id: string;
  applicationId?: string;
  context: ExecutionContext;
  response?: string;
  options?: {[key: string]: any};
}
