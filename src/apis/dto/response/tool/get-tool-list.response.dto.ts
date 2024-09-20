
import ResponseDto from '../response.dto';
import { Tool } from 'src/types';

// interface: get tool list response body Dto //
export default interface GetToolListResponseDto extends ResponseDto{
    tools: Tool[];

}