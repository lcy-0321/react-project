import { createGlobalStyle } from 'styled-components';

const GlobalStyleFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1587899551505'); /* IE9 */
    src: url('./iconfont.eot?t=1587899551505#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1587899551505') format('woff'),
    url('./iconfont.ttf?t=1587899551505') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1587899551505#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-guanbi:before {
    content: "\\e676";
  }

  .icon-guanbi1:before {
    content: "\\e60c";
  }

  .icon-guanbi2:before {
    content: "\\e641";
  }

  .icon-xinxi3:before {
    content: "\\e640";
  }

  .icon-xinxifuwu:before {
    content: "\\e617";
  }

  .icon-xinxi:before {
    content: "\\e627";
  }

  .icon-xinxi1:before {
    content: "\\e62b";
  }

  .icon-xinxi2:before {
    content: "\\e630";
  }

  .icon-shangjiantoushixinxiao:before {
    content: "\\e62a";
  }

  .icon-xiajiantoushixinxiao:before {
    content: "\\e634";
  }

  .icon-youjiantoushixinxiao:before {
    content: "\\e637";
  }

  .icon-zuojiantoushixinxiao:before {
    content: "\\e63b";
  }
`
export default GlobalStyleFont
