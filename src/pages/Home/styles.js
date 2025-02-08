import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    
    margin: 20px 0 0 0;

    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    .background {
        height: 100vh;
        position: absolute;
        left: 0;
        z-index: -1;
    }
    
    .info {
        width: 60%;
        margin-right: 90px;
        margin-top: 40px;
        color: #FFF;
    }

    .perfil {
    display: flex;
    margin: 40px 0;
    font-family: Arial, Helvetica, sans-serif;
    }

    .profile {
        width: 120px;
        height: 120px;
        border-radius: 60px;
        border: 2px solid #E5E5E5;
        margin-right: 32px;
    }

    .perfil h3 {
        color: #999;
        font-size: 24px;
        margin: 0px;
    }

    .perfil span {
        display: block;
        color: #999;
        font-size: 12px;
        margin: 0px;
    }

    .perfil p {
        color: #999;
        font-size: 12px;
        margin: 20px 0 0 0;
    }

    .repositorio {
        font-size: 32px;
        color: #fff;
        margin: 12px 0;
        text-align: center;
    }

`