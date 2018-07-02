export class test {
    private _message: string;
    private _minutes: number;
    private _completed: boolean;
    
    constructor() {
        this._message = "Aprender angular? 5 minutos!";
        this._minutes = 5;
        this._completed = true;
    }

    getMessage() : string {
        return this._message;
    }

    setMessage(message: string) {
        this._message = message;
    }

    getMinutes() : number {
        return this._minutes;
    }

    setMinutes(minutes: number) {
        this._minutes = minutes;
    }

    isCompleted() : boolean {
        return this._completed;
    }

    setCompleted(completed: boolean) {
        this._completed = completed;
    }
}