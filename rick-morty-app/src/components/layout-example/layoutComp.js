import React, { Component } from 'react';
import './layoutComp.scss';

class LayoutComp extends Component {
    percentageChange() {
        const rand = Math.floor((10 + Math.random() * (100 + 1 - 10)));

        let percentage = document.querySelector('.percentage');
        let percentageText = document.querySelector('.percentage-text');
        
        percentageText.innerHTML = `${rand}%`;
        percentage.style.width = `${rand}%`;
    }

    render() {
        return (
            <section className='layout-wrapper'>
                <h1>Layout example</h1>
                <div className='ratio-layout-wrapper'>
                    <div className='outer-layout-wrapper'>
                        <div className='inner-layout-wrapper'>
                            <p className="sales-title">Обучение по продажам</p>
                            <p className="sales-number">Вы сделали <span id="sales-number-js">13</span> продаж и заработали:</p>
                            <p className="sales-money">$ 2 000</p>
                            <div className="plan-wrapper">
                                <p className="plan-rusult">Месячный план выполнен на</p>
                                <div className="percentage-wrapper">
                                    <span className="percentage-text">75%</span>
                                    <div className="percentage"></div>
                                </div>
                                <div className="continue-wrapper">
                                    <button className="continue" onClick={this.percentageChange}>Продолжить</button>
                                    <p>Осталось 8 дней</p>
                                </div>
                            </div>
                        </div>
                        <div className='member-number'><span>25</span></div>
                    </div>
                </div>
            </section>   
        );
    }
}

export default LayoutComp