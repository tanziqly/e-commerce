import { makeAutoObservable, action } from "mobx";

interface User {
  id?: number;
  email?: string;
  password?: string;
}

export default class UserStore {
  private _isAuth: boolean;
  private _user: User;

  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
    if (!bool) {
      localStorage.removeItem("token");
    }
  }

  setUser(user: User) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}

// example1@email.com
