
import { CareRecord } from "src/types";
import ResponseDto from "../response.dto";

// interface: get care record Response Body Dto //
export default interface GetCareRecordListResponseDto extends ResponseDto {
    careRecords: CareRecord[];
}