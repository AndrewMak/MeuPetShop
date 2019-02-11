import { Controller, Get, Post, Put, Delete } from "@nestjs/common";

//localhost:3000/customer
@Controller('v1/customers')
export class CustomerController {
    @Get()
    get() {

        return 'obter os clientes';
    }
    @Post()
    post() {
        return 'post os clientes';
    }
    @Put()
    put() {
        return 'put os clientes';
    }
    @Delete()
    delete() {
        return 'delete os clientes';
    }
}