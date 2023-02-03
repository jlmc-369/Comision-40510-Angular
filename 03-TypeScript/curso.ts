export class Curso{
    private _nombre: string;
    private _comision: string;
    private _profesor: string;

    get nombre(): string{
        return this.nombre;
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }

    get comision(): string{
        return this.comision;
    }

    set comision(comision: string){
        this._comision = comision;
    }

    get profesor(): string{
        return this.profesor;
    }

    set profesor(profesor: string){
        this._profesor = profesor;
    }

}