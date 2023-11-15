export interface Task {
  id: string,
  description: string,
  status: number,
  pripriorityCode: number
  startDate: Date,
  endDate: Date,
  collaboratorId: number,
  collaboratorName: string,
  notes: string,
}