import app from "../../src/app";

import { employeeService } from "../../src/services/employeeService";
import { employeeRepository } from "../../src/repositories/employeeRepository" 

describe("create new employee", () => {
    it("should create a new employee", async () => {
        const cpf = '12345678912'
        const name = 'Fulano de tal'

       jest.spyOn(employeeRepository, "findEmployeeByCpf").mockImplementationOnce(() : any => {})

       await employeeService.createNewEmployee(cpf, name);
       expect(employeeRepository.insertEmployee).toBeCalledTimes(1);
    })
})