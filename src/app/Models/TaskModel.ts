export interface Task {
  id: string,
  description: string,
  status: number,
  pripriorityCode: number
  startDate: Date,
  endDate: Date,
  collaboratorId: string,
  collaboratorName: string,
  notes: string,
}

export interface TaskFilter {
  collaboratorI?: string;
  status?: number;
  pripriorityCode?: number;
  fromDate?: Date;
  toDate?: Date;
}

export interface CreateUpdateTask {
  description: string,
  status: number,
  pripriorityCode: number
  startDate: Date,
  endDate: Date,
  collaboratorId: string,
  notes?: string,
}