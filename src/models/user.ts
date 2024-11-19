export class User {
  userName: string
  role: 'employee' | 'admin'
  email: string

  constructor(userName: string, role: 'employee' | 'admin', email: string) {
    this.userName = userName
    this.role = role
    this.email = email
  }
}
