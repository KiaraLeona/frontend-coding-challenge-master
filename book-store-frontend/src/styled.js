import styled from 'styled-components';

const colors = {
	default: '#eee',
	filledStar: '#ddaa22'
};

export const StyledBookStoreList = styled.div`
	max-width: 700px;
	margin: 0 auto;
`;

export const StyledElementWrapper = styled.div`
	width: auto;
	margin: 2em 1em;
	border: 1px solid ${colors.default};
	position: relative;
`;

export const StyledElementBody = styled.div`
	width: 100%;
	display: flex;
	flex: 0 1 auto;

	@media (max-width: 500px) {
		display: block;
		text-align: center;
	}
`;

export const StyledElementFooter = styled.div`
	width: 100%;
	display: flex;
	background: ${colors.default};
	padding: 1em;

	& span {
		margin: 0 0.5em;
		flex: 1;
	}
`;

export const StyledElementImage = styled.img`
	width: 8em;
	height: 8em;
	margin: 1em;
	border-radius: 4em;
	flex: 0 0 auto;
`;

export const StyledElementInfo = styled.div`
	margin: 1em;
`;

export const StyledElementList = styled.ul`
	list-style-type: none;
	padding: 0;

	& li span.bookName {
		font-weight: 500;
	}
	& li span.bookAuthor {
		font-style: italic;
	}
`;

export const StyledH2 = styled.h2`
	margin-top: 0;
`;

export const StyledH3 = styled.h2`
	font-size: 1.2em;
`;

export const StyledFlag = styled.img`
	width: 1.5em;
	height: 1.5em;
`;

export const StyledRating = styled.div`
	display: flex;
	position: absolute;
	top: 1em;
	right: 1em;

	@media (max-width: 500px) {
		position: inherit;
		justify-content: center;
	}
`;

export const StyledStar = styled.div.attrs((props) => ({
	fillColor: props.filled ? colors.filledStar : colors.default
}))`
	&::before {
		content: '\u2605';
		color: ${(props) => props.fillColor};
	}
`;
