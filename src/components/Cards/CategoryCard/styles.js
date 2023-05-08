import styled from "styled-components";

export const CategoryCard = styled.div`
	width: calc(33% - 11px);
	@media (max-width: 768px) {
		width: calc(50% - 11px);
	}

	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #fff;
		border-radius: 4px;
		padding: 20px;
		text-decoration: none;		
	
		img {
			align-self: center;
			width: 100%;
			height: auto;
		}
	
		h5 {
			color: #333;
			margin-top: 5px;
			text-align: center;
		}
	
		button {
			background: rgb(241, 148, 32);
			color: #fff;
			border: 0;
			border-radius: 4px;
			overflow: hidden;
			margin-top: auto;
			display: flex;
			align-items: center;
			transition: background 0.2s;
			&:hover {
				background: rgb(200, 120, 28);
			}
			div {
				display: flex;
				align-items: center;
				padding: 12px;
				background: rgba(0, 0, 0, 0.1);
				svg {
					margin-right: 5px;
				}
	
		> span {
			font-size: 21px;
			font-weight: bold;
			margin: 5px 0 20px;
		}
	}
`
