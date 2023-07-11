import { UUID } from "crypto";

export interface SanityBase {
  _createdAt?: string
  _id?: UUID
  _key?: string
  _rev?: string
  _type?: string
  _updatedAt?: string
}
