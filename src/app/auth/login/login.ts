export class Login {
    email: string;
    password: string;
    device_id: string;
    device_name: string;
    fcm_token: string;

    success: boolean;
    data: {
      access_token: string,
      email: string,
      id: string,
      name: string,
      photo: string
    };
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
  data: {
    access_token: string,
    email: string,
    id: string,
    name: string,
    photo: string
  };
  message: string;
}

