import { Customer } from "src/types";
import ResponseDto from "../response.dto";

// interface: get customer list Response Body Dto //
export default interface GetCustomerListResponseDto extends ResponseDto {
    customers: Customer[];
}