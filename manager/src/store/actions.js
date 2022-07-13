import { getUserRouters } from '@/api'
import { formatRouterTree } from '@/libs/utils'

export default {
  async setUserRouters ({ commit, state }) {
    const userRouters = await getUserRouters(state.uid)
    const payload = formatRouterTree(userRouters)

    console.log(payload)

    commit('setUserRouter', payload)
    commit('setAuth', true)
  }
}
