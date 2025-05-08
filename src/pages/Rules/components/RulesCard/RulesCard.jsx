import React from 'react'
import { rulesdata } from '../../../../const'
import {useNavigate} from "react-router-dom"
import "./RulesCard.css"

const RulesCard = () => {
    const navigate = useNavigate();


    console.log(rulesdata);
  return (
    <div className="rules-card">
        <div className="rules-title-div">
        <h1 className="rules-title">Rules</h1>
        <h1 className="rules-shadow">Rules</h1>
        </div>
        <section className="rules-content-section">
            {rulesdata.map((ruleSection)=>(
                <div key={ruleSection.id} className="rule-section">
                    <h2 className="purple-text rule-section-title uppercase">{ruleSection.title}</h2>
                    {ruleSection?.blurb 
                    ? 
                    <p>{ruleSection.blurb}</p>
                    :
                    <>
                    {ruleSection.rules.map((ruleItem,idx)=>(
                        <li key={idx} className="rule-item">
                            <p className="bold">{ruleItem.id}</p>
                            <p>{ruleItem.rule}</p>
                        </li>
                    ))}
                    </>
}
                </div>
            ))}
            <div className="round-btn-div rules-btn-div">
                <button className="round-btn rules-btn" onClick={()=>navigate("/")}>
                    <div className="check-div"></div>
                </button>
                <div className="round-btn-shadow"></div>
            </div>
        </section>
    </div>
  )
}

export default RulesCard