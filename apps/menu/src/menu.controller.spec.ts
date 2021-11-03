import { Test, TestingModule } from '@nestjs/testing';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { Menu } from './schemas/menu-schema';

describe('MenuController', () => {
  let menuController: MenuController;
  let service: MenuService;

  const mockMenu = {
    slug: 'slug',
    name: 'name',
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MenuController],
      providers: [
        {
          provide: MenuService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([mockMenu]),
          },
        },
      ],
    }).compile();

    menuController = app.get<MenuController>(MenuController);
    service = app.get<MenuService>(MenuService);
  });

  describe('root', () => {
    it('should return array of menu items', async () => {
      const response: [Menu] = await menuController.findAll();
      expect(response).toEqual([mockMenu]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
