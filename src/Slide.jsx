import React, { Component } from 'react';

export default class Slide extends Component {
    constructor(props) {
        super(props);
        var imagens = ["number1.jpg", "number2.jpg", "number3.jpg", "number4.jpg"]
        var interval =
            setInterval(() => {
                if (this.state.count >= 3) {
                    this.setState({
                        count: 0
                    });
                } else {
                    this.setState({
                        count: this.state.count + 1,
                    });
                }
            }, 2000);

        this.state = {
            count: 0,
            imagens: imagens,
            interval: interval
        }

        this.countClick = this.countClick.bind(this);
        this.countMenosClick = this.countMenosClick.bind(this);
        this.paraInterval = this.paraInterval.bind(this);
        this.iniciaInterval = this.iniciaInterval.bind(this);

    }


    countClick(e) {
        if (this.state.count >= 3) {
            this.setState({
                count: 0
            });
        } else {
            this.setState({
                count: this.state.count + 1,
            });
        }
        if (this.state.interval) {
            interval: this.paraInterval()
            this.setState({
                interval: setTimeout(() => { this.iniciaInterval() }, 6000)
            });
        }
    }

    countMenosClick(f) {
        if (this.state.count <= 0) {
            this.setState({
                count: 3
            })
        } else {
            this.setState({
                count: this.state.count - 1,
            })
        }
        if (this.state.interval) {
            interval: this.paraInterval()
            this.setState({
                interval: setTimeout(() => { this.iniciaInterval() }, 6000)
            });
        }
    }
    iniciaInterval(p) {
        p = this.setState({
            interval: setInterval(() => {
                if (this.state.count >= 3) {
                    this.setState({
                        count: 0
                    });
                } else {
                    this.setState({
                        count: this.state.count + 1,
                    });
                }
            }, 2000)
        })
    }
    paraInterval() {
        clearInterval(this.state.interval)

    }


    render() {

        return (
            <div className="slider" >
                <button id="ante" className="back" onClick={this.countMenosClick} >Vem</button>
                <button id="prox" className="next" onClick={this.countClick}>Vai</button>
                <h2>-Imagem-</h2>
                <div>
                    <img id="img" src={this.state.imagens[this.state.count]} onMouseOver={() => { this.paraInterval() }} onMouseLeave={this.iniciaInterval} /* onClick={this.mostraTexto}*/ alt="imagem" />
                </div>
                <div>
                </div>
            </div>
        );

    }

}