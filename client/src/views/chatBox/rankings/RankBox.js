import React, { useMemo } from 'react'
import './RankBox.scss';

const RankBox = ({ players }) => {
  const playersRender = useMemo(() => players.map(player => {
    return (
      <div className="rank-box">
        <img className="team-logo" src={player.teamLogo} />
        <img className="player-image" src={player.playerImage} />
        <div className="ranking-container">
          <h1 className="ranking"> #{player.ranking} </h1>
        </div>
        <h1 className="player-name"> {player.playerName} </h1>
      </div>
    )
  }), [players])

  return (
    <div>
      {playersRender}
    </div>
  )
}

export default RankBox
