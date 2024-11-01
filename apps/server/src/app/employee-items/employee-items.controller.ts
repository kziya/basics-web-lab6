import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeItems } from './employee-items.schema';
import { EmployeeItemsRepository } from './employee-items.repository';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('EmployeeItems')
@Controller('employee-items')
export class EmployeeItemsController {
  constructor(
    private readonly employeeItemsRepository: EmployeeItemsRepository
  ) {}

  @ApiOperation({ summary: 'Get employee items list' })
  @ApiOkResponse({ type: () => EmployeeItems, isArray: true })
  @Get('list')
  async getEmployeeItemsList(): Promise<EmployeeItems[]> {
    return this.employeeItemsRepository.getEmployeeItemList();
  }

  @ApiOperation({ summary: 'Create employee item' })
  @Post()
  async createEmployeeItems(
    @Body() employeeItems: EmployeeItems
  ): Promise<EmployeeItems> {
    return this.employeeItemsRepository.createEmployeeItem(employeeItems);
  }

  @ApiOperation({ summary: 'Update employee item' })
  @Put(':id')
  async updateEmployeeItems(
    @Param('id') id: string,
    @Body() employeeItems: EmployeeItems
  ): Promise<void> {
    await this.employeeItemsRepository.updateEmployeeItem(id, employeeItems);
  }

  @ApiOperation({ summary: 'Delete employee item' })
  @Delete(':id')
  async deleteEmployeeItem(@Param('id') id: string): Promise<void> {
    await this.employeeItemsRepository.deleteEmployeeItem(id);
  }
}
