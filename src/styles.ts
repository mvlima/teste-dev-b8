import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: auto;
    font-family: 'Inter', sans-serif;

    section {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 20px;
        background-color: #dddddd;

        .product-content{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            text-align: left;
            height: 500px;
            width: 240px;
            background: #ffffff;
            margin-left: auto;
            margin-right: auto;
            padding: 32px;
            border-radius: 8px;
            position: relative;
            transition: box-shadow 0.3s ease;
            

            button.btnClass {
                border: none;
                outline: 0;
                padding: 12px 48px;
                color: #ffffff;
                background-color: #40B25C;
                text-align: center;
                cursor: pointer;
                width: 240px;
                height: 48px;
                font-size: 16px;
                font-weight: bold;
                border-radius: 5px;
                transition: all 0.3s ease;
                display: flex;
                justify-content: space-around;
                align-items: center;

                &.btnClicked{
                    background-color: #A3F9B9;
                    color: #000000;
                }

                &.btnClicked:hover{
                    color: #FFFFFF;

                    path{ 
                        stroke: #FFFFFF;
                    }
                }                
            }

            button.btnClass:hover {
                background-color: #1C6C3E;
                box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.08);
            }
        }

        .product-name{
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
        }

        .price-group{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 68px;
        }

        .product-old-price{
            color: #B5B5B6;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
        }

        .product-price{
            color: #DA4B4F;
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;
        }

        .product-installments{
            color: #848587;
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
        }

        .heartClass {
            position: absolute;
            top: 32px;
            right: 32px;
            z-index: 10;
            width: 48px;
            height: 48px;
            border: none;
            background: none;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover{
                svg,circle{                                                            
                    fill:#FFCAE0;
                }
                path{
                    stroke:#DA4B4F;
                    fill:#FFCAE0;
                }
            }
        }

        .heartClass.heartClicked{
            svg,circle{                                                            
                    fill:#DA4B4F;
                }
                path{
                    stroke:#FFFFFF;
                    fill:#FFFFFF;
                }

            &:hover{
                svg,circle{                                                            
                    fill:#C22539;
                }
            }
        }

        .product-content:hover{
            transform: scale(1.001);
            box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.25);
        }

        
    }
`