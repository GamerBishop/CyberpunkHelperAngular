export class Users {
    public Id: number;
    public UserName: string;
    public Password: string;
    public Role: string;

    constructor(Id: number, UserName: string, Password: string, Role: string) {
        this.Id = Id;
        this.UserName = UserName;
        this.Password = Password;
        this.Role = Role;
    }
}