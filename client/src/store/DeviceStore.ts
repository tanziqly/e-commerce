import { makeAutoObservable } from "mobx";

interface IType {
  id: number;
  name: string;
}

interface IBrand {
  id: number;
  name: string;
}

interface IDevice {
  id: number;
  name: string;
  price: number;
  img: string;
}

export default class DeviceStore {
  private _types: IType[] = [];
  private _brands: IBrand[] = [];
  private _devices: IDevice[] = [];

  constructor() {
    this._types = [
      { id: 1, name: "type1" },
      { id: 2, name: "type2" },
    ];

    this._brands = [
      { id: 1, name: "brand1" },
      { id: 2, name: "brand2" },
    ];

    this._devices = [
      {
        id: 1,
        name: "device1",
        price: 1000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrmbEEUOzvUm5sSXoEL0gjmTUutwQSDqKpg&s",
      },
      {
        id: 2,
        name: "device2",
        price: 1000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrmbEEUOzvUm5sSXoEL0gjmTUutwQSDqKpg&s",
      },
    ];

    makeAutoObservable(this);
  }
  setTypes(types: IType[]) {
    this._types = types;
  }
  setBrands(brands: IBrand[]) {
    this._brands = brands;
  }
  setDevices(devices: IDevice[]) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
