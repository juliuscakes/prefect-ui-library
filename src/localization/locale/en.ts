export const en = {
  docs: {
    gettingStarted: 'https://docs.prefect.io/getting-started/overview/',
    flows: 'https://docs.prefect.io/concepts/flows/',
    flowRuns: 'https://docs.prefect.io/ui/flow-runs/',
    blocks: 'https://docs.prefect.io/ui/blocks/',
    workQueues: 'https://docs.prefect.io/ui/work-queues/',
    notifications: 'https://docs.prefect.io/ui/notifications/',
    deployments: 'https://docs.prefect.io/ui/deployments/',
    concurrency: 'https://docs.prefect.io/concepts/tasks/?h=conc#task-run-concurrency-limits',
    automations: 'https://docs.prefect.io/ui/automations/',
    workerPools: 'https://docs.prefect.io/ui/worker-pools/',
  },
  error: {
    activateDeployment: 'Failed to activate deployment',
    activateNotification: 'Failed to activate notification',
    activateWorkerPool: 'Failed to activate worker pool',
    activateWorkQueue: 'Failed to activate work queue',
    cancelFlowRun: 'Failed to cancel flow run',
    changeFlowRunState: 'Failed to change flow run state',
    changeTaskRunState: 'Failed to change task run state',
    createBlock: 'Failed to create block',
    createConcurrencyLimit: 'Failed to create concurrency limit',
    createNotification: 'Failed to create notification',
    createSavedSearch: 'Failed to create saved filter',
    createSchedule: 'Failed to create schedule',
    createWorkerPool: 'Failed to create worker pool',
    createWorkerPoolQueue: 'Failed to create worker pool queue',
    createWorkQueue: 'Failed to create work queue',
    delete: (type: string) => `Failed to delete ${type}`,
    deleteSavedSearch: 'Failed to delete saved filter',
    pauseDeployment: 'Failed to pause deployment',
    pauseFlowRun: 'Failed to pause flow run',
    pauseNotification: 'Failed to pause notification',
    pauseWorkerPool: 'Failed to pause worker pool',
    pauseWorkQueue: 'Failed to pause work queue',
    removeSchedule: 'Failed to remove schedule',
    resumeFlowRun: 'Failed to resume flow run',
    retryRun: 'Failed to retry flow run',
    scheduleFlowRun: 'Failed to schedule flow run',
    submitNotification: 'Failed to submit notification',
    updateBlock: 'Failed to update block',
    updateNotification: 'Failed to update notification',
    updateSchedule: 'Failed to update schedule',
    updateWorkerPool: 'Failed to update worker pool',
    updateWorkQueue: 'Failed to update work queue',
  },
  success: {
    activateDeployment: 'Deployment active',
    activateNotification: 'Notification active',
    activateWorkerPool: 'Worker pool active',
    activateWorkQueue: 'Work queue active',
    cancelFlowRun: 'Flow run cancelled',
    changeFlowRunState: 'Flow run state changed',
    changeTaskRunState: 'Task run state changed',
    createBlock: 'Block created',
    createConcurrencyLimit: 'Concurrency limit added',
    createNotification: 'Notification created',
    createSavedSearch: 'Filter saved',
    createSchedule: 'Schedule added',
    createWorkerPool: 'Worker pool created',
    createWorkerPoolQueue: 'Worker pool queue created',
    createWorkQueue: 'Work queue created',
    delete: (type: string) => `${type} deleted`,
    deleteSavedSearch: 'Saved filter deleted',
    pauseDeployment: 'Deployment paused',
    pauseFlowRun: 'Flow run paused',
    pauseNotification: 'Notification paused',
    pauseWorkerPool: 'Worker pool paused',
    pauseWorkQueue: 'Work queue paused',
    removeSchedule: 'Schedule removed',
    resumeFlowRun: 'Flow run resumed',
    retryRun: 'Retrying run',
    scheduleFlowRun: 'Flow run scheduled',
    updateBlock: 'Block updated',
    updateNotification: 'Notification updated',
    updateSchedule: 'Schedule updated',
    updateWorkerPool: 'Worker pool updated',
    updateWorkQueue: 'Work queue updated',
  },
  info: {
    deprecatedWorkQueue: 'This work queue uses a deprecated tag-based approach to matching flow runs; it will continue to work but you can\'t modify it',
    deploymentMissingWorkQueue: 'This deployment doesn\'t have an associated work queue; runs will be scheduled but won\'t be picked up by your agents',
  },
}