import { DEFAULT_VARIANT_OPTION } from '../constants'


export default class Notification {
  constructor ({message, variant=DEFAULT_VARIANT_OPTION}) {
    this.id = crypto.randomUUID()
    this.message = message
    this.variant = variant
  }
}
