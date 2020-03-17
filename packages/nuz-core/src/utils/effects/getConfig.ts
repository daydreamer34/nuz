import { CONFIG_KEY } from '@nuz/shared'

import { BootstrapConfig } from '../../types'

import Config, { ConfigInitial } from '../../classes/Config'
import * as selfHelpers from '../selfHelpers'

export { default as Config } from '../../classes/Config'

export let refConfig = selfHelpers.get()[CONFIG_KEY]

export const initConfig = (config?: ConfigInitial) => {
  if (!refConfig) {
    refConfig = new Config(config)
    selfHelpers.set(CONFIG_KEY, refConfig)
  }
}

const getConfig = (): Config => refConfig

export default getConfig
