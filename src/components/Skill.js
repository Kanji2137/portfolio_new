import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return (
            <div>
                <div className="img-websites">
                  <img src={this.props.SrcImg} alt="screen of website" />
                </div>
                <ion-icon name={this.props.NameIcon} class="icon-skill"></ion-icon>
                <div className="title-skill">
                    {this.props.Name}
                </div >
                <div className="description-skill">
                    {this.props.Description}
                </div>
                <a href="https://github.com/Kanji2137" target="_blank" rel="noopener noreferrer" className="btn btn-full">My Github</a>
            </div>
        );
    }
}

export default Skill;