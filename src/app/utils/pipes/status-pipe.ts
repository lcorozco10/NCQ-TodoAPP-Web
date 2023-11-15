import { Pipe, PipeTransform } from "@angular/core";
import { StatusValues } from "../enums/status";

@Pipe({
  standalone: true,
  name: 'statusTask'
})
export class StatusTaskPipe implements PipeTransform {
  transform(value: number): string {
    return StatusValues[value];
  }
}