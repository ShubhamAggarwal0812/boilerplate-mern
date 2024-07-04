import { SharedTask } from '../types';
import { SharedTaskDB } from './store/shared-task-db';

export default class SharedTaskUtil {
  public static convertSharedTaskDBToSharedTask(
    sharedTaskDb: SharedTaskDB
  ): SharedTask {
    const sharedTask = new SharedTask();
    sharedTask.id = sharedTaskDb._id.toString();
    (sharedTask.task = sharedTaskDb.task),
    (sharedTask.account = sharedTaskDb.account.toString());
    return sharedTask;
  }
}
