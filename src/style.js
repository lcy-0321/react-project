import { createGlobalStyle  } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	#root {
		width: 100%;
		height: 100%;
	}
	/* antd全局样式 */
	.global-lang-select {
        color: #1890ff;
        background-color: #e6f7ff;
    }
	/* antd提示箭头 */
	.ant-tooltip-inner {
		font-size: 12px;
		border: 1px solid #bdbdbd;
		color: #585858;
		background-color: #fff;
	}
	.ant-tooltip-placement-bottomLeft .ant-tooltip-inner::after {
		content: '';
		position: absolute;
		top: 0px;
		background: #fff;
		width: 5px;
		height: 5px;
		left: 17px;
		transform: translateX(-0.2px) translateY(6.53553391px) rotate(45deg);
	}
	.ant-tooltip-arrow::before {
		border: 1px solid #bdbdbd;
		background-color: #fff;
	}
`
export default GlobalStyle