import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('добавление товара в корзину', () => {
  const cart = new Cart();
  cart.add({id: 1001, name: 'War and Piece', price: 1000});
  expect(cart.items.length).toBe(1);
});

test('вычисление суммарной стоимости с учётом скидки', () => {
  const cart = new Cart();
  cart.add({id: 1001, name: 'War and Piece', price: 1000});
  cart.add({id: 1002, name: 'Piece', price: 2000});
  expect(cart.calculateBonus(0.1)).toBe(2700);
});

test('удаление товара из корзины', () => {
  const cart = new Cart();
  cart.add({id: 1001, name: 'War and Piece', price: 1000});
  cart.add({id: 1002, name: 'Piece', price: 2000});
  cart.add({id: 1003, name: 'War', price: 2000});
  cart.delete(1002);
  expect(cart.items).toEqual([
    {id: 1001, name: 'War and Piece', price: 1000},
    {id: 1003, name: 'War', price: 2000}
  ]);
});

test('удаление несуществующего товара из корзины', () => {
  const cart = new Cart();
  cart.add({id: 1001, name: 'War and Piece', price: 1000});
  cart.add({id: 1002, name: 'Piece', price: 2000});
  cart.add({id: 1003, name: 'War', price: 2000});
  cart.delete(1000);
  expect(cart.items).toEqual([
    {id: 1001, name: 'War and Piece', price: 1000},
    {id: 1002, name: 'Piece', price: 2000},
    {id: 1003, name: 'War', price: 2000}
  ]);
});