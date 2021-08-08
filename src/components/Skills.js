import React, { Component } from 'react';
import { Link } from "react-router-dom";
import data from "../data/data.json";
import Skill from "./Skill"
import blob_001 from "../images/blob (1).svg";
import blob_003 from "../images/blob (3).svg";

class Skills extends Component {
    render() {
        return (
            <div>
                <section className="section-skills">
                    <div id="blob-container-002" className="blob" style={{left:"35%", top:"30%"}}>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#08BDBA" transform="translate(100 100)"/>
                        </svg>
                    </div>
                    <img src={blob_001} alt="blob_001" className="blob" style={{left: "63%", top: "50%"}}/>
                    <img src={blob_003} alt="blob_003" className="blob" style={{left: "14%", top: "70%"}}/>
                    <div className="container-skills">
                        
                        <div className="introduction-skills">
                            <h1>My awesome<br/><span className="full-colors long-word">skills</span></h1>
                            <h3>{data.Skills}</h3>
                            <Link className="btn btn-full" to="/contact">Contact</Link>
                        </div>
                        <div className="container-websites">
                            {
                                data.SkillSet.map((skillDetail, index) => {
                                    return skillDetail.id % 2 === 0 ?
                                        <div className="box-skill" style={{float: "left"}} key={index}>
                                            <Skill Name={skillDetail.Name} Description={skillDetail.Description} NameIcon={skillDetail.NameIcon} SrcImg={skillDetail.SrcImg}/>
                                        </div>
                                    :
                                        <div className="box-skill" style={{float: "right"}} key={index}>
                                            <Skill Name={skillDetail.Name} Description={skillDetail.Description} NameIcon={skillDetail.NameIcon} SrcImg={skillDetail.SrcImg}/>
                                        </div>
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;