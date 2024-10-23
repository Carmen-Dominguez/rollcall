export class User {
  userName: string
  role: 'employee' | 'admin'

  constructor(userName: string, role: 'employee' | 'admin') {
    this.userName = userName
    this.role = role
  }
}
