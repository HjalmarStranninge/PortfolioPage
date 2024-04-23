import React, { useState } from 'react';

export default function Home() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    }


    return (
        <>
            <section>
                <article className="popup" id="modal1">
                    <div className="popup-head">
                        <h2>Modal1 - title</h2>
                        <a className="close" href="#">X</a>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, autem optio! Ea
                        similique impedit
                        labore architecto officiis tenetur.
                    </p>
                    <a className="button" href="https://github.com" target="_blank">Click me!</a>
                </article>
            </section>

            <main>
                <h1>Mina projekt!</h1>
                <section className="main">
                    <section className="card">
                        <img
                            className="card-img"
                            src="https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg"
                            alt=""
                        />
                        <article>
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
                                porro ratione eius dolores consequuntur
                            </p>
                            <a className="button" href="#modal1">
                                read more
                            </a>
                        </article>
                    </section>
                    <section className="card">
                        <img
                            className="card-img"
                            src="https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg"
                            alt=""
                        />
                        <article>
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
                                porro ratione eius dolores consequuntur
                            </p>
                            <a className="button" href="#modal2">
                                read more
                            </a>
                        </article>
                    </section>
                    <section className="card">
                        <img
                            className="card-img"
                            src="https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg"
                            alt=""
                        />
                        <article>
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
                                porro ratione eius dolores consequuntur
                            </p>
                            <a className="button" href="#modal3">
                                read more
                            </a>
                        </article>
                    </section>
                    <section className="card">
                        <img
                            className="card-img"
                            src="https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg"
                            alt=""
                        />
                        <article>
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
                                porro ratione eius dolores consequuntur
                            </p>
                            <a className="button" href="#modal4">
                                read more
                            </a>
                        </article>
                    </section>
                </section>
            </main>


        </>
    )
}