import { SharedTask, CreateSharedTaskParams } from '../types';

import SharedTaskRepository from './store/shared-task-repository';
import SharedTaskUtil from './shared-task-util';

export default class SharedTaskWriter {
  public static async createSharedTask(
    params: CreateSharedTaskParams,
  ): Promise<SharedTask> {
    const createdSharedTask = await SharedTaskRepository.create({
      task: params.taskId,
      account: params.accountId,
    });
    return SharedTaskUtil.convertSharedTaskDBToSharedTask(createdSharedTask);
  }
}
