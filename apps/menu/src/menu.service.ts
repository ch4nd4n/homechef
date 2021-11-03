import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  getMenuApis(): string {
    return 'Menu APIs';
  }
}
