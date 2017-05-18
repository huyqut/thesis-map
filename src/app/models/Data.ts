export class Data<T> {
    private _status: number;
    private _message: string;
    private _data: T;
    

	public get status(): number {
		return this._status;
	}

	public set status(value: number) {
		this._status = value;
	}
    

	public get message(): string {
		return this._message;
	}

	public set message(value: string) {
		this._message = value;
	}
    
	public get data(): T {
		return this._data;
	}

	public set data(value: T) {
		this._data = value;
	}
    
}