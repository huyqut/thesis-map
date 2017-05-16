export class Coord {
    private _latitude: number;
    private _longitude: number;

    public get lat(): number {
        return this._latitude;
    }

    public set lat(value: number) {
        this._latitude = value;
    }

    public get lng(): number {
        return this._longitude;
    }

    public set lng(value: number) {
        this._longitude = value;
    }
}

export class RectArea {
    private _northeast: Coord;
    private _southwest: Coord;

    public get northeast(): Coord {
        return this._northeast;
    }

    public set northeast(value: Coord) {
        this._northeast = value;
    }

    public get southwest(): Coord {
        return this._southwest;
    }

    public set southwest(value: Coord) {
        this._southwest = value;
    }
}

export class Geometry {
    private _bounds: RectArea;
    private _location: Coord;
    private _locationType: string;
    private _viewport: RectArea;

    public get bounds(): RectArea {
        return this._bounds;
    }

    public set bounds(value: RectArea) {
        this._bounds = value;
    }

    public get location(): Coord {
        return this._location;
    }

    public set location(value: Coord) {
        this._location = value;
    }

    public get locationType(): string {
        return this._locationType;
    }

    public set locationType(value: string) {
        this._locationType = value;
    }

    public get viewport(): RectArea {
        return this._viewport;
    }

    public set viewport(value: RectArea) {
        this._viewport = value;
    }
}