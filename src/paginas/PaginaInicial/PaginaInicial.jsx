import React from 'react'
import banner from "../../assets/banner.png"
import style from './PaginaInicial.module.scss'

import Cabecalho from "components/Cabecalho";
import MenuLateral from "components/Menu";
import Rodape from "components/Rodape";
import Galeria from "components/Galeria";
import Populares from "components/Populares";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={style.principal}>
                    <MenuLateral />
                    <div className={style.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem vista do espaço" />
                    </div>
                </section>
            </main>
            <div className={style.galeria}>
                <Galeria />
                <Populares />
            </div>
            <Rodape />
        </>
    )
}
