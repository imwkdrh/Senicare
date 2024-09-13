// interface: 회원가입 Request Body Dto //
export default interface SignUpRequestDto{
    name: string;
    userId: string;
    password: string;
    telNumber: String;
    authNumber: string;
    joinPath: string;
    snsId?: string;

}