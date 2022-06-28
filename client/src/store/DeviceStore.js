import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 1, name: 'Смартфоны' }
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 1, name: 'Apple' }
        ]
        this._devices = [
            { id: 1, name: 'Iphone 12 pro', price: 30000, img: '../server/static/e830205b-c917-4978-a104-ba7e0d989949.jpg' },
            { id: 1, name: 'Iphone 12 pro', price: 30000, img: '../server/static/e830205b-c917-4978-a104-ba7e0d989949.jpg' },
            { id: 1, name: 'Iphone 12 pro', price: 30000, img: '../server/static/e830205b-c917-4978-a104-ba7e0d989949.jpg' },
            { id: 1, name: 'Iphone 12 pro', price: 30000, img: '../server/static/e830205b-c917-4978-a104-ba7e0d989949.jpg' }
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}
