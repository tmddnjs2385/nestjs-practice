import {
  PipeTransform,
  //ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { BoardStatus } from '../boards.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];
  transform(value: any) {
    value = value.toUppercase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }

    //  console.log('value', value); //value는 추가로 바뀌는 값
    //  console.log('metadata', metadata);

    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);

    return index !== -1;
  }
}
