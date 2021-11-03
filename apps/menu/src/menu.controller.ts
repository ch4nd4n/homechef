import { Controller, Get } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller()
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async findAll(): Promise<any> {
    return await this.menuService.findAll();
  }
}
