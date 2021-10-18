import { StyledBookStoreList } from '../styled';
import { BookStoreElement } from './bookStoreElement';
import { BookStoreListType, BookStoreElementType } from '../types';

export const BookStoreList = (props: BookStoreListType) => {
	return (
		<StyledBookStoreList>
			{props.bookStores.map((bookStore: BookStoreElementType, i: number) => {
				return <BookStoreElement key={i} {...bookStore} maxBooksShown={2}></BookStoreElement>;
			})}
		</StyledBookStoreList>
	);
};
