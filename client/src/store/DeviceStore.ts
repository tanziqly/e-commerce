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
  private _page: number = 1;
  private _totalCount: number = 0;
  private _limit: number = 3;

  constructor() {
    this._types = [];

    this._brands = [];

    this._devices = [];

    this._selectedType = { id: 0, name: "" };
    this._selectedBrand = { id: 0, name: "" };
    this._page = 1;
    this._totalCount = 2;
    this._limit = 3;

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

  setPage(page: number) {
    this._page = page;
  }
  setTotalCount(totalCount: number) {
    this._totalCount = totalCount;
  }
  setLimit(limit: number) {
    this._limit = limit;
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

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }
}
