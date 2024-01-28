// Cart.ts
import Buyable from '../domain/Buyable';

export default class Cart {
    items: Buyable[] = [];

    add(item: Buyable): void {
        this.items.push(item);
    }

    delete(itemId: number): void {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    calculateBonus(discount: number): number {
        return this.items.reduce((total, item) => total + item.price, 0) * (1 - discount);
    }
}