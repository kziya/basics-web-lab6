import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  collection: 'employee_items',
  timestamps: true,
})
export class EmployeeItems {
  @ApiProperty({ example: '63329519c88e9cbf3b87a420' })
  _id?: Types.ObjectId;

  @ApiProperty({ example: new Date().toISOString() })
  createdAt?: Date;

  @ApiProperty({ example: new Date().toISOString() })
  updatedAt?: Date;

  @ApiProperty({
    example: 'Surname example',
  })
  @Prop()
  surname: string;

  @ApiProperty({ example: 'No1232' })
  @Prop()
  roomNumber: string;

  @ApiProperty({ example: 'some item' })
  @Prop()
  itemName: string;

  @ApiProperty({ example: new Date().toISOString() })
  @Prop()
  issueDate: Date;
}

export const EmployeeItemSchema = SchemaFactory.createForClass(EmployeeItems);
