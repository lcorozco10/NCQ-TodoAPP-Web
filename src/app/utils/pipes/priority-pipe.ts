import { Pipe, PipeTransform } from "@angular/core";
import { PriorityValues } from "../enums/priority";

@Pipe({
  standalone: true,
  name: 'priorityTask'
})
export class PriorityTaskPipe implements PipeTransform {
  transform(value: number): string {
    return PriorityValues[value];
  }
}