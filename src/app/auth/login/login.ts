export class Login {
    email: string;
    password: string;
    device_id: string;
    device_name: string;
    fcm_token: string;

    success: boolean;
    data: object;
    message: string;
}

export class LoginSocial {
  email: string;
  provider: string;
  token: string;
  device_id: string;
  device_name: string;
  fcm_token: string;

  success: boolean;
  data: object;
  message: string;
}

