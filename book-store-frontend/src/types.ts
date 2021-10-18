export type AuthorInfo = { fullName: string };

export type BookInfo = {
	name: string;
	copiesSold: number;
	author: AuthorInfo;
};

export type BookStoreInfo = {
	name: string;
	website: string;
	rating: number;
	storeImage: string;
	establishmentDate: Date;
};

export type BookStoreElementType = {
	id: string;
	attributes: BookStoreInfo;
	country: string;
	books: Array<BookInfo>;
	maxBooksShown: number;
};

export type BookStoreListType = {
	bookStores: Array<BookStoreElementType>;
};
