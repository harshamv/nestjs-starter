export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  displayPhoto?: string;
}

export interface SignUpRsp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignInRsp {
  email: string;
  password: string;
}
