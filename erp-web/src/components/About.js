import React from 'react'
import DataReport from '../assets/img/undraw_data_report_bi6l.png'

export default function About () {
    return (
        <>
            <div className="about-wrapper">
                <h3 className="about-wrapper-title">Why ERP ?</h3>
                <img className="about-wrapper-img" src={DataReport}/>
                <p className="about-wrapper-text">
                    ERP (<strong style={{ color: "#90E1FF", fontStyle: 'italic' }}>Enterprise Resource Planning</strong>) is a system and software package used by companies to manage their daily business activities, 
                    such as financial management, procurement, production, projects, HR, and others. 
                    This system can facilitate businesses with real-time and accurate information, so you can make good business decisions based on the data generated. 
                    By collecting shared transaction data from multiple sources, ERP systems prevent duplication of data by providing data integrity.
                </p>
            </div>
        </>
    )
}