
import React from "react"
import styles from "@/styles/Home.module.css";




export default function Characters() {

    
    const mostraprimeiro = (e1, e2, e3, e4, e5, e6) => {
        document.getElementById(e1).style.display = "flex";
        document.getElementById(e2).style.display = "none";
        document.getElementById(e3).style.display = "none";
        document.getElementById(e4).style.display = "none";
        document.getElementById(e5).style.display = "none";
        document.getElementById(e6).style.display = "none";
    };
    

    return (
        <>

        <div className={styles.icones} id="assassinos">
            
            <h1>OS ICONES DO TERROR</h1>
            <div className={styles.selecionar}>
                <button onClick={() => mostraprimeiro('FreddyKrueger', 'NekoRobin', 'MichaelMyers', 'Leatherface', 'Pennywise', 'Jason')}>Freddy</button>
                <button onClick={() => mostraprimeiro('NekoRobin', 'FreddyKrueger', 'MichaelMyers', 'Leatherface', 'Pennywise', 'Jason')}>Neko</button>
                <button onClick={() => mostraprimeiro('MichaelMyers', 'NekoRobin', 'FreddyKrueger', 'Leatherface', 'Pennywise', 'Jason')}>Michael Myers</button>
                <button onClick={() => mostraprimeiro('Leatherface', 'NekoRobin', 'FreddyKrueger', 'MichaelMyers', 'Pennywise', 'Jason')}>Leatherface</button>
                <button onClick={() => mostraprimeiro('Pennywise', 'NekoRobin', 'FreddyKrueger', 'MichaelMyers', 'Leatherface', 'Jason')}>Pennywise</button>
                <button onClick={() => mostraprimeiro('Jason', 'NekoRobin', 'FreddyKrueger', 'MichaelMyers', 'Leatherface', 'Pennywise')}>Jason</button>
            </div>

            <div className={styles.slides}>

                <div className={styles.slideInicial} id="FreddyKrueger">
                    <div className={styles.texto}>
                        <h2>Freddy Krueger</h2>
                        <p>
                        Freddy Krueger, criado por Wes Craven para "A Nightmare on Elm Street",
                        é um icônico assassino em série que ataca em pesadelos. Ele usa uma luva
                        com lâminas afiadas e tem uma aparência marcante: chapéu fedora, suéter
                        listrado e rosto queimado. Misturando terror psicológico e sobrenatural,
                        Freddy se tornou memorável.
                        </p>
                    </div>
                    <img src="https://s3-alpha-sig.figma.com/img/4154/95f6/ac866a3eec814dab1e4bf8faa885f84c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-Sy-tpopakfEUDmPr6ROI3-1L9FPjXsZH2A-i5ZRtlV0oZ9I3C5HFMC9UxFVG470S8KWEid6E2j8Qca2d0PnM~1f8lWIxJAplMwUxsvydla131i-N-nLnAYGMSUhrAX3PW-KJ2YRdawphZ573x3aAk1sKtD09qBht66QzlZ-0Z1O~LKdw4iu-eEBYm94xdQgdJGqI-b6pCFyATTHNf2OUb3RlLOZr2I06CLvidG-fm8bqhNG7lQj9aEnf6gTlhrtgbACymkcONTIVWZZVU5xwkXfcHlM-svSCBjLwM6~I-vlzS-MpudTj~151gzx4X4CQ77cM3b6E8L7Fmn2-iI1w__" />
                </div>

                <div className={styles.slideOculto} id="NekoRobin">
                    <div className={styles.texto}>
                        <h2>Neko Robin</h2>
                        <p>
                        Neko Robin é uma entidade sobrenatural, sombria e enigmática, que se alimenta
                        do medo e da ansiedade dos candidatos que buscam uma vaga. Durante o processo
                        seletivo, ele espreita nas sombras, observando silenciosamente cada movimento,
                        enquanto coleciona as almas dos que ousam tentar. No entanto, os escolhidos não
                        estão destinados à escuridão eterna, mas sim à salinha, onde serão movidos pelo
                        irresistível café grátis.
                        </p>
                    </div>
                    <img src="https://s3-alpha-sig.figma.com/img/4c94/a969/27d14f5be9b740d57357a8460a529d82?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MVVQdJ5~0IZJ8tPX8sCtQyHohpu2TquJSaPgd71jIg5V15ayDBxQlVXisFu8zosgTDcnrP0D1qlTJ8H8QhkOKhJxThtYwgUE9w-evkZO2UlV3Knj5IGdWuLoH41dxjVWOPtvOSgafB0tCyNB27689Wj7yNhvYAwmukVYVmf2~0Q4xNERThKjH1-9m5g62ye1L5q2lLPnieH6KOKzl7WDo6U7Au8-ax6Qs8qp~2on7q1O-cNc-Kt7i88vIMKnakMpl3-R4-Tqa9rtqpxgbeF6mKmpOTU-g1-jO6JYNs64s3nJCNzlQwNogBlS7DrxjqRopKiEw~sZpkLHOJuT1YFoTw__" />
                </div>

                <div className={styles.slideOculto} id="MichaelMyers">
                    <div className={styles.texto}>
                        <h2>Michael Myers</h2>
                        <p>
                        Michael Myers é o vilão da franquia "Halloween",
                        criado por John Carpenter. Um assassino silencioso
                        e implacável, ele usa uma máscara branca e é conhecido
                        por perseguir e matar suas vítimas, especialmente na
                        noite de Halloween. Representa o mal puro, agindo sem
                        motivo claro, tornando-se um ícone do terror.
                        </p>
                    </div>
                    <img src="https://s3-alpha-sig.figma.com/img/6477/46e5/69589ad6eb8d0f05c3cbde651ef3d112?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IpxEtxz~ODKIPm5IDKVF1NgkjK5JoCF-KNVTvr404H8~cdjIhwIQ04MmLGxIYuLEkQH74jKVw92jlE1RSKRhhLzHX6~JQV-33XxmyTJURoNnWZ2KCuzA6x4oWmjNEkwMgOO4AHpP3TADUcJ-RvtePApMJth0wM1oEOr6lBZ3eOxJME-YYvzSsPOjBX3416Qowxsd8eji7RX9RC-vy4gGaLdRbfYDes8LOsQGYVvBUzs50tGn6DCZKrNLRgcMRpBmgOSjxpBp6Rn1VFS70C0Z8BC~HawSFevqrPns6TNKf8NXNs6JUNc4lq7Mh7YCXGZgVpUT2gfS1vid9AjR75fKXg__" />
                </div>

                <div className={styles.slideOculto} id="Leatherface">
                    <div className={styles.texto}>
                        <h2>Leatherface</h2>
                        <p>
                        Leatherface é um homem corpulento que usa uma máscara de pele humana e
                        carrega uma serra elétrica, tornando-o uma figura aterrorizante. Ele vive
                        em uma fazenda isolada com sua família canibal, os Sawyer, que sequestram
                        e matam viajantes. Mentalmente instável, age de forma primitiva e violenta,
                        sendo frequentemente manipulado por outros membros da família.
                        </p>
                    </div>
                    <img src="https://s3-alpha-sig.figma.com/img/8a23/c00e/59c0ef310a12d47e8cbb231fe7b52427?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j7UxAvmeFMfZ~9zD7aDOo4Q9Eggz37dPUjxephaFNfX2w7vNJdeqQdXqkEZszrkTX2e~lkJGM7YuaXWj~T1j3s9uHS0QAqlFXuljPX81EzPGLoXbxKGQB1CJUuX4u196MRhJzW~AphOSyqx7EaRmyDHnaU4PysKdIUA4b7rzPC1QdZ9h75A7gfj~2BYNE04mOJVss-~wgU~uUMBNwn2mDe2KJZrrKzu1c3QABInBTJFNFJFNLhq2MTlRpl1Xqqvoequ~jJNjyxNCnnaR9HugPkGIk4XSzOufS37NpzsukH6FheTXnU8aw~Bhf3yXGi8alo36gbqM6y3e7aagMcF0ZQ__" />
                </div>

                <div className={styles.slideOculto} id="Pennywise">
                    <div className={styles.texto}>
                        <h2>Pennywise</h2>
                        <p>
                        Pennywise é uma entidade cósmica que se alimenta 
                        Pennywise é uma entidade cósmica que se alimenta 
                        do medo e surge a cada 27 anos em Derry. Ele 
                        assume a forma de um palhaço para atrair vítimas, 
                        especialmente crianças, e usa ilusões para explorar 
                        seus piores medos. Sádico e manipulador, sua 
                        verdadeira forma é uma força maligna além da 
                        compreensão humana.
                        </p>
                    </div>
                    <img src="https://s3-alpha-sig.figma.com/img/778c/a399/2c10721c48d249c89fa5d548467a64fd?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gT7o9BTWlqZF4aVwWG2eCw~TaU4P2kwzTETXmqW4topBAyClMuVHXbNyDHF8rWwj3uppc~TxgmKj-QvylAX0150lgNA0rpwr9QzMvbJbt2jIcD3jCvha-3IGz20snyIyFwvS9dmuPaaWMvm40jGGVNymsPBRYhKIhoBQJTOTZRz1X0-6H5Dwy5-xLA976fQ73cbdLhCLDAnuK3KF2JZjJQw4GbvYyfKT7jc~083lLP3NBiVd1-kFekLOxeyot7ci6k02P8t5HUDrE0jXzD--yQm-tSNDMfWCGOCdEnU~YLnuVWEBFZ4ZXuDgf1FA-ncn4MIF~6QPeDVyQszk48nYzw__" />
                </div>

                <div className={styles.slideOculto} id="Jason">
                    <div className={styles.texto}>
                        <h2>Jason</h2>
                        <p>
                        Jason Voorhees, da série "Friday the 13th", é um assassino icônico criado
                        por Victor Miller. Após se afogar no Lago Crystal, busca vingança usando uma
                        máscara de hóquei e um facão para matar campistas. Sua figura se tornou um
                        símbolo do gênero slasher e um ícone da cultura pop.
                        </p>
                    </div>
                    <img src="https://s3-alpha-sig.figma.com/img/a5c6/69ea/095a3f4d3a92117dda09976ae89a5938?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V5biOY2yTmRaJwtoD4l~cW1Mpk8T-K-~mHJiucE3WCeKvJF0BvhrSj-Hvi9cVfkopnOVu0qTOCBVHqjHsIZPsGJkty1UkE9VPofvnonb-5k790Hd~TkJL3dMvUGdXO12rpnusgM6ZZ3usvUcQy-zEowcW0IzSdgwZmsUr57DbhiL3XjZ6HW4RCuvYDst65pTRJKAMutNkIQTmtz614ew~hW7CHYZtSJnjr1Ow0HMKCBcJsbwyCyn8hmz~hGXhUvx-95dEpUDxuLoRhd1Z49DNtiJ-ol-gxxRKzU8Hls7ZFmxjYSBaBm3v8tNHEtPA9Ryp6QXyAgqb82W82-7fnIbUQ__" />
                </div>
            </div>
            
        </div>
        </>
    )
}