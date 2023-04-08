import type { User, UserResponse } from '../types'
import { API } from './API'

class UserService {
    private readonly endpoint = {
        users: '/users',
    }

    async fetchUsers(): Promise<User[]> {
        const { data: res } = await API.get<UserResponse>(this.endpoint.users)
        return res.users
    }
}

export const userService = new UserService()
