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
  private _selectedType: IType = { id: 0, name: "" };
  private _selectedBrand: IType = { id: 0, name: "" };

  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Телефоны" },
      { id: 3, name: "Стиральные машины" },
      { id: 4, name: "Ноутбуки" },
      { id: 5, name: "Планшеты" },
      { id: 6, name: "Компьютеры" },
    ];

    this._brands = [
      { id: 1, name: "Xiaomi" },
      { id: 2, name: "Samsung" },
      { id: 3, name: "LG" },
      { id: 4, name: "Apple" },
      { id: 5, name: "Huawei" },
      { id: 6, name: "Honor" },
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
      {
        id: 3,
        name: "device2",
        price: 1000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrmbEEUOzvUm5sSXoEL0gjmTUutwQSDqKpg&s",
      },
      {
        id: 4,
        name: "device2",
        price: 1000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrmbEEUOzvUm5sSXoEL0gjmTUutwQSDqKpg&s",
      },
      {
        id: 5,
        name: "device2",
        price: 1000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrmbEEUOzvUm5sSXoEL0gjmTUutwQSDqKpg&s",
      },
      {
        id: 6,
        name: "device2",
        price: 1000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrmbEEUOzvUm5sSXoEL0gjmTUutwQSDqKpg&s",
      },
      {
        id: 7,
        name: "device2",
        price: 1000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrmbEEUOzvUm5sSXoEL0gjmTUutwQSDqKpg&s",
      },
    ];

    this._selectedType = { id: 0, name: "" };
    this._selectedBrand = { id: 0, name: "" };

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
  setSelectedType(type: IType) {
    this._selectedType = type;
  }

  setSelectedBrand(brand: IBrand) {
    this._selectedBrand = brand;
  }

  resetFilters() {
    this._selectedType = { id: 0, name: "" };
    this._selectedBrand = { id: 0, name: "" };
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

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
