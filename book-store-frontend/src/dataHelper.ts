import { AuthorInfo, BookInfo, BookStoreListType } from './types';

export const getBookStoreList = (res: any): BookStoreListType => {
	const { data, included } = res;

	const countries: { [key: string]: string } = {};
	const authors: { [key: string]: AuthorInfo } = {};
	const books: { [key: string]: BookInfo } = {};

	included.forEach((elem: any) => {
		if (elem.type === 'countries') {
			countries[elem.id] = elem.attributes?.code;
		} else if (elem.type === 'authors') {
			authors[elem.id] = { fullName: elem.attributes?.fullName };
		} else if (elem.type === 'books') {
			books[elem.id] = {
				name: elem.attributes.name as string,
				copiesSold: (elem.attributes.copiesSold || 0) as number,
				author: authors[elem.relationships.author.data.id]
			};
		}
	});

	const bookStores: BookStoreListType = data.map((elem: any) => {
		return {
			id: elem.id,
			attributes: {
				...elem.attributes,
				establishmentDate: new Date(elem.attributes.establishmentDate)
			},
			country: countries[elem.relationships?.countries?.data?.id],
			books: elem.relationships?.books?.data
				.map((book: any) => books[book.id])
				.sort((a: BookInfo, b: BookInfo) => b.copiesSold - a.copiesSold)
		};
	});

	return bookStores;
};
