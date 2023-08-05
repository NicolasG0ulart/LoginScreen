import styled from "styled-components"

export const ScreenLogin = styled.body`
    width: 100%;
    height: 100vh;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1, h2, h3, h4, h5, p{
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        color: #1A202C;
    }
    @media(max-width: 1540px){
        padding-inline: 100px;
    }
`
export const ImageLeft = styled.img`
    width: 400px;
    height: 330px;
`
export const SectionLogin = styled.section`
    .text-welcome{
        font-size: 1rem;
    }
    .text-login{
        line-height: 2.5rem;
        font-size: 1,625rem;
        font-weight: 700;
    }
    .text-email{
        margin-top: 50px;
        font-size: 1rem;
    }
    .input-email{
        margin-top: 15px;
        height: 50px;
        width: 350px;
        border: solid 1px #E8E8E8;
        border-radius: 5px;
        padding: 20px;

        &::placeholder{
            font-weight: 600;
        }
    }

    .text-senha{
        margin-top: 20px;
        font-size: 1rem;
    }

    .input-senha{
        margin-top: 15px;
        height: 50px;
        width: 350px;
        border: solid 1px #E8E8E8;
        border-radius: 5px;
        padding: 20px;

        &::placeholder{
            font-weight: 600;
        }
    }
    .input-senha-invalid{
        margin-top: 15px;
        height: 50px;
        width: 350px;
        border: solid 1px red;
        border-radius: 5px;
        padding: 20px;
        &::placeholder{
            font-weight: 600;
            color: red;
        }
    }

    .remember-div{
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        div{
            display: flex;
            gap: 10px;

            label{
                font-family: 'Montserrat', sans-serif;
                font-size: 14px;
                font-weight: 500;
                color: #1A202C;
                &:hover{
                    cursor: pointer;
                }
            }
        }

        .forgot-password{
            font-size: 14px;
            color: #2B6CB0;
            &:hover{
                cursor: pointer;
            }
        }
    }

    .button-enter{
        margin-top: 40px;
        background-color: #04C35C;
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 5px;

        color: #fff;
        font-size: 1rem;
        font-weight: 700;
        &:hover{
            cursor: pointer;
        }
    }
    .button-google{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
        background-color: #1A202C;
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 5px;

        color: #fff;
        font-size: 1rem;
        font-weight: 700;
        &:hover{
            cursor: pointer;
        }
    }

`