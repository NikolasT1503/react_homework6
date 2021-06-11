import React from "react";
import PropTypes from "prop-types";

class Season extends React.Component {
  state = {
    activeSeason: this.props.value,
  };

  handleSeason = (e) => {
    this.setState({ activeSeason: +e.target.getAttribute("data-name") });
  };
  /*     showSeason = () => {
        const {activeSeason} = this.state
        switch (activeSeason) {
            case 1:
              return (
                <div className="season">
                  <img
                    className="season_jpg"
                    src="https://i.pinimg.com/originals/1f/9e/15/1f9e15adbbca485e43471c9cb7e04562.jpg"
                    alt=""
                  />
                  <div className="season_name">Зима</div>
                </div>
              );
            case 2:
              return (
                <div className="season">
                  <img
                    className="season_jpg"
                    src="https://klike.net/uploads/posts/2018-12/medium/1544865706_2.jpg"
                    alt=""
                  />
                  <div className="season_name">Весна</div>
                </div>
              );
            case 3:
              return (
                <div className="season">
                  <img
                    className="season_jpg"
                    src="https://klike.net/uploads/posts/2018-12/1544870354_1.jpg"
                    alt=""
                  />
                  <div className="season_name">Лето</div>
                </div>
              );
            default:
              return (
                <div className="season">
                  <img
                    className="season_jpg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Mt-St-Greg-RueEcureuils-3.jpg/200px-Mt-St-Greg-RueEcureuils-3.jpg"
                    alt=""
                  />
                  <div className="season_name">Осень</div>
                </div>
              );
          } */
  /*     return (
        <div className="season">
            <img className="season_jpg" src="https://i.pinimg.com/originals/1f/9e/15/1f9e15adbbca485e43471c9cb7e04562.jpg" alt=""/>
            <div className="season_name">Зима</div>
        </div>
    ) */
  /*   if (value === 1) {
    return (
      <div className="season">
        <img
          className="season_jpg"
          src="https://i.pinimg.com/originals/1f/9e/15/1f9e15adbbca485e43471c9cb7e04562.jpg"
          alt=""
        />
        <div className="season_name">Зима</div>
      </div>
    )
  } else if (value === 2) {
    return (
    <div className="season">
    <img
      className="season_jpg"
      src="https://klike.net/uploads/posts/2018-12/medium/1544865706_2.jpg"
      alt=""
    />
    <div className="season_name">Весна</div>
  </div>      
      )
  } else if (value === 3) {
    return (
    <div className="season">
    <img
      className="season_jpg"
      src="https://klike.net/uploads/posts/2018-12/1544870354_1.jpg"
      alt=""
    />
    <div className="season_name">Лето</div>
  </div>   
        )        
  } else {
    return (
        <div className="season">
        <img
          className="season_jpg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Mt-St-Greg-RueEcureuils-3.jpg/200px-Mt-St-Greg-RueEcureuils-3.jpg"
          alt=""
        />
        <div className="season_name">Осень</div>
      </div>           
    )
  } */

  render() {
    const { activeSeason } = this.state;
    console.log(this.state);
    return (
      <>
        <button data-name={1} onClick={this.handleSeason}>
          Зима
        </button>
        <button data-name={2} onClick={this.handleSeason}>
          Весна
        </button>
        <button data-name={3} onClick={this.handleSeason}>
          Лето
        </button>
        <button data-name={4} onClick={this.handleSeason}>
          Осень
        </button>
        {activeSeason === 1 ? (
          <div className="season">
            <img
              className="season_jpg"
              src="https://i.pinimg.com/originals/1f/9e/15/1f9e15adbbca485e43471c9cb7e04562.jpg"
              alt=""
            />
            <div className="season_name">Зима</div>
          </div>
        ) : activeSeason === 2 ? (
          <div className="season">
            <img
              className="season_jpg"
              src="https://klike.net/uploads/posts/2018-12/medium/1544865706_2.jpg"
              alt=""
            />
            <div className="season_name">Весна</div>
          </div>
        ) : activeSeason === 3 ? (
          <div className="season">
            <img
              className="season_jpg"
              src="https://klike.net/uploads/posts/2018-12/1544870354_1.jpg"
              alt=""
            />
            <div className="season_name">Лето</div>
          </div>
        ) : (
          <div className="season">
            <img
              className="season_jpg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Mt-St-Greg-RueEcureuils-3.jpg/200px-Mt-St-Greg-RueEcureuils-3.jpg"
              alt=""
            />
            <div className="season_name">Осень</div>
          </div>
        )}
      </>
    );
  }
}

export default Season;

Season.propTypes = {
  value: PropTypes.number.isRequired,
};
