export interface IUser {
  first_name?: string | undefined,
  last_name?: string | undefined,
  email?:string | undefined,
  account_type?: string | undefined,
  id?: number | undefined,
}

export const EmptyUserValue = {
  first_name: '',
  last_name: '',
  email: '',
  account_type: '',
  id: -1,
} as IUser;
