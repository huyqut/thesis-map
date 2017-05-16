import { Geometry } from './Geometry';

export class Location {
    
    private _place: string;
    private _count: number;
    private _geometry: Geometry;

    public get place(): string {
        return this._place;
    }

    public set place(value: string) {
        this._place = value;
    }

    public get count(): number {
        return this._count;
    }

    public set count(value: number) {
        this._count = value;
    }

    public get geometry(): Geometry {
        return this._geometry;
    }

    public set geometry(value: Geometry) {
        this._geometry = value;
    }
    
}