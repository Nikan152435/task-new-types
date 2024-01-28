import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

const cart = new Cart();
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1000, 500));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 2000));
cart.add(new Movie(
    3,
    'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/300x450',
    'Мстители',
    'The Avengers',
    'США',
    '«Avengers Assemble!»',
    'фантастика, боевик, фэнтези, приключения',
    137,
    'IMAX',
    3000
));