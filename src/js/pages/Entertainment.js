/** 
 * View class to display the Entertainment information
 * 
 * @author Lachlan Charteris
 * @module js/pages/Entertainment
 */

import React from 'react';
import feather from 'feather-icons';

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
            <div className="home-button">
              <Cell 
                cellType={CellConstants.BUTTONS.BACK}
                callback={() => this.setState({ entertainmentPage: null, description: EntertainmentConstants.DEFAULT_DESCRIPTION })}
              />
            </div>
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
    return <div className="modal-shell-vertical">
      <div className="modal-shell-horizontal">
        {this.state.fields.map((field, index) => 
          <div className="modal-vertical">
            <div className="title-field">{field.title}</div>
              <div className="button-field">
                {field.objects.map((subField) => 
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
                )}
              </div>
          </div>
        )}
      </div>
      <div className="modal-horizontal">
        <div className="description-field">
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
        <div className="modal loading">
          Loading Modal...
        </div>
      );
    }

    return (
      this.state.entertainmentPage === null ?
        this.generateEntertainmentLists() : 
        this.getEntertainmentModal()
    )
  }
}

Entertainment.defaultProps = {
}

export default Entertainment;