import ResponseDto from "../response.dto";

// interface: get customer Response Body Dto //
export default interface GetCustomerResponseDto extends ResponseDto {
    customerNumber: number;
    profileImage: string;
    name: string;
    birth: string;
    chargerName: string;
    chargerId: string;
    address: string;
    
}