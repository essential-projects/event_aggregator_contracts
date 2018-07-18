import {ExecutionContext} from '@essential-projects/iam_contracts';

export interface IEventMetadata {
  id: string;
  applicationId?: string;
  context: ExecutionContext;
  response?: string;
  options?: {[key: string]: any};
}
