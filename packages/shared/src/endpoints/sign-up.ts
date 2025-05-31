export interface ISignUpBody {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  timezone: string;
  password: string;
}

export interface ISignUpResponse {
  userId: string;
}
