import {
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

export class Helpers {
  static readonly logger = new Logger('Helpers');

  static handleDBExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }

  static capitalizeFirstLetter = (inputString: string): string => {
    inputString = inputString.trim();

    if (inputString.length === 0) {
      return inputString;
    }

    const firstLetter = inputString[0].toUpperCase();
    const restOfString = inputString.slice(1).toLowerCase();
    const result = firstLetter + restOfString;

    return result;
  };
}
