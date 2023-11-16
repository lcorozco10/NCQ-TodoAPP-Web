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
  collaboratorId?: string;
  status?: number;
  pripriorityCode?: number;
  fromDate?: string;
  toDate?: string;
}

export interface CreateUpdateTask {
  description: string,
  status: number,
  pripriorityCode: number
  startDate: string,
  endDate: string,
  collaboratorId: string,
  notes?: string,
}