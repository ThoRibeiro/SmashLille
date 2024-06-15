export interface Member {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  image?: string;
}

export interface UpdatedMemberInfo {
  firstname?: string;
  lastname?: string;
  email?: string;
  role?: string;
  image?: string;
}

export interface NewMemberInfo {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  image?: string;
}
