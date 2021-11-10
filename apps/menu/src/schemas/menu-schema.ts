import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MenuDocument = Menu & Document;

@Schema()
export class Menu {
  @Prop()
  slug: string;

  @Prop()
  name: number;

  @Prop()
  status: string;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
