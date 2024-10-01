// interface: get charged customer response body dto //
import { ChargedCustomer } from 'src/types';
import ResponseDto from '../response.dto';
export default interface GetChargedCustomerResponseDto extends ResponseDto{
    customers: ChargedCustomer[];
    

}