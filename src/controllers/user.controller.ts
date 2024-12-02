import { User } from 'src/models/user'

export class UserController {
  users: User[] = []

  // Create
  createUser(user: User) {
    this.users.push(user)
  }

  createUsers(users: User[]) {
    this.users.push(...users)
  }

  // Read
  getAllUsers() {
    return this.users
  }

  getUser(userName: string): User | undefined {
    return this.users.find(u => u.userName === userName)
  }

  // Update
  updateUser(user: User) {
    const updatedUsers = this.users.map(u => {
      if (u.userName === user.userName) {
        return { ...u, ...user }
      } else return u
    })

    // eslint-disable-next-line no-console
    console.log(updatedUsers)
    this.users = updatedUsers
  }

  // Delete
  deleteUser(targetUser: User) {
    const user = this.users.find(u => u.userName === targetUser.userName) ?? null

    if (user) {
      this.users = this.users.filter(obj => obj.userName !== targetUser.userName)
      return this.users
    }
    return null
  }

  isUser(u: User): u is User {
    return (
      u !== null &&
      typeof u === 'object' &&
      typeof u.userName === 'string' &&
      typeof u.email === 'string' &&
      (u.role === 'employee' || u.role === 'admin')
    )
  }
}
