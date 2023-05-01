/** 
 * View class to display the Entertainment information
 * 
 * @author Lachlan Charteris
 * @module js/pages/Entertainment
 */

import React from 'react';

import GameOfLife from '../games/GameOfLife';
import Cell from '../utils/Cell';

import CellConstants from '../constants/CellConstants';
import EntertainmentConstants from '../constants/EntertainmentConstants';

import './css/pagestyle.css';

class Entertainment extends React.Component {
  /**
   * @inheritdoc
   */
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      fields: EntertainmentConstants.ENTERTAINMENT_LIST,
      entertainmentPage: null,
      description: EntertainmentConstants.DEFAULT_DESCRIPTION,
    }

    this.getEntertainmentModal = this.getEntertainmentModal.bind(this);
    this.generateEntertainmentLists = this.generateEntertainmentLists.bind(this);
  }

  /**
   * @inheritdoc
   */
  componentDidMount() {
    this.setState({ loaded: true });
  }

  /**
   * Returns a new modal for a particular entertainment modal selected
   * @returns {React.Element}
   */
  getEntertainmentModal() {
    switch (this.state.entertainmentPage) {
      case EntertainmentConstants.PAGE_IDS.GAME_OF_LIFE:
        return <GameOfLife />;
      default:
        return (
          <div className="modal">
            <div className="loading">
              Entertainment Modal Incomplete
            </div>
          </div>
        );
    };
  }

  /**
   * Returns a list of modals which list various entertainment fields defined in the constants
   * @returns {React.Element}
   */
  generateEntertainmentLists() {
    const vw = Math.max(document.documentElement.clientWidth ?? 0, window.innerWidth ?? 0);
    const modalWidth = (vw - vw * 0.1) / this.state.fields.length;
    const margin = vw * 0.025;

    const shift = (index) => (modalWidth + margin)  * index + margin;

    return <div>
      {this.state.fields.map((field, index) => 
        <div className="modal" style={{width: modalWidth, height: '60vh', left: shift(index), top: '12vh'}}>
          <div className="title-field" style={{left: '17%'}}>{field.title}</div>
          {field.objects.map((subField) => 
            <div className="button-field" style={{margin: '2%'}}>
              <Cell
                cellType={CellConstants.BUTTONS.DEFAULT}
                title={subField.name}
                callback={() => this.setState({ entertainmentPage: subField.key })}
                overloads={{
                  onMouseEnter: () => this.setState({ description: subField.description }),
                  onMouseLeave: () => this.setState({ description: EntertainmentConstants.DEFAULT_DESCRIPTION }),
                }}
                styleOverloads={{id: subField.key}}
              />
            </div>
          )}
        </div>
      )}
      <div className="modal" style={{height: '20vh', top: '75vh'}}>
        <div className="description-field" style={{top: '3vh'}}>
          {this.state.description}
        </div>
      </div>
    </div>
  }

  /**
   * @inheritdoc
   */
  render() {
    if (!this.state.loaded) {
      return (
        <div className="modal">
          <div className="loading">Loading Modal...</div>
        </div>
      );
    }

    return (
      this.state.entertainmentPage === null ?
        this.generateEntertainmentLists() 
        : <div>
            {this.getEntertainmentModal()}
            <div className="back-button">
              <Cell 
                cellType={CellConstants.BUTTONS.BACK}
                callback={() => this.setState({ entertainmentPage: null, description: EntertainmentConstants.DEFAULT_DESCRIPTION })}
              />
            </div>
        </div>
    )
  }
}

Entertainment.defaultProps = {
}

export default Entertainment;