import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class OrderByValidationPipe implements PipeTransform {
  transform(value: any) {
    if (value !== 'asc' && value !== 'desc') {
      throw new BadRequestException(
        `Invalid orderBy value. Allowed values are 'asc' or 'desc'.`,
      );
    }
    return value;
  }
}
