import React from 'react';
import {
	StyledElementWrapper,
	StyledElementImage,
	StyledElementInfo,
	StyledElementList,
	StyledH2,
	StyledH3,
	StyledStar,
	StyledElementFooter,
	StyledFlag,
	StyledElementBody,
	StyledRating
} from '../styled';
import { BookInfo, BookStoreElementType } from '../types';

export const Rating = (props: { rating: number }) => {
	return (
		<StyledRating>
			{[1, 2, 3, 4, 5].map((n: number, i: number) =>
				props.rating && n <= props.rating ? <StyledStar key={i} filled={true} /> : <StyledStar key={i}/>
			)}
		</StyledRating>
	);
};

export const BookStoreElement = (props: BookStoreElementType) => {
	return (
		<StyledElementWrapper>
			<StyledElementBody>
				<StyledElementImage src={props.attributes.storeImage}></StyledElementImage>
				<StyledElementInfo>
					<StyledH2>{props.attributes.name}</StyledH2>
					<Rating rating={props.attributes.rating}></Rating>
					<StyledH3>Best-selling books</StyledH3>
					<StyledElementList>
						{props.books
							? props.books.slice(0, props.maxBooksShown).map((book: BookInfo, i: number) => (
									<li key={i}>
										<span className="bookName">{book.name}</span>
										{' by '}
										<span className="bookAuthor">
											{book.author ? book.author.fullName : 'unknown'}
										</span>
									</li>
							  ))
							: 'No data available'}
					</StyledElementList>
				</StyledElementInfo>
			</StyledElementBody>
			<StyledElementFooter>
				<span>
					{props.attributes.establishmentDate?.toLocaleDateString('de-CH', {
						day: '2-digit',
						month: '2-digit',
						year: 'numeric'
					}) + ' | '}
					<a href={props.attributes.website} target="_blank" rel="noreferrer">
						{props.attributes.website}
					</a>
				</span>
				<StyledFlag src={`https://www.countryflags.io/${props.country}/shiny/64.png`}></StyledFlag>
			</StyledElementFooter>
		</StyledElementWrapper>
	);
};
