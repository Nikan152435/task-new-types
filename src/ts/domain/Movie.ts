import Buyable from './Buyable';
export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly picture: string,
        readonly name: string,
        readonly originalTitle: string,
        readonly country : string,
        readonly line: string,
        readonly genre: string,
        readonly runningTimeMinutes: number,         
        readonly format: string,
        readonly price: number,
        ) {}

    get runningTimeHoursMinutes(): string {
        let hours = Math.floor(this.runningTimeMinutes / 60);
        let minutes = this.runningTimeMinutes % 60;
        return hours + ':' + minutes;
    }

}