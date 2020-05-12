import styled from 'styled-components';

export const ContentStyled = styled.div`
    .main {
        color: #9c9c9c;
        font-size: 40px;
        text-align: center;
        overflow: hidden;
        min-height:300px;

        .welcome {
            line-height: 300px;
            background-color: #fff;
        }
        .address{
            height: 400px
        }
        //输入框
        .cssInput{
            width: 200px;
            height: 30px;
            margin-bottom:20px
        }
        .cssInput:active{
            border-color:#1566d2;
        }
        .BMap_cpyCtrl{
            display:none
        }
        .anchorBL{
            display:none
        }
        .mb50 {
            margin-bottom: 50px;
        }
    }
`;

