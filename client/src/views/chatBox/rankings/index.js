import React from 'react'
import RankBox from './RankBox'
const players = [{
  teamLogo: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/394353/skt.png",
  playerImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/394353/faker.png",
  ranking: "1",
  playerName: "Faker"
}, {
  teamLogo: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/394353/teamsolomid.png",
  playerImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/394353/bjergerking.png",
  ranking: "2",
  playerName: "Bjergsen"
},
{
  teamLogo: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/394353/Cloud9_Logo.png",
  playerImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/394353/jensen.png",
  ranking: "3",
  playerName: "Jensen"
}]
const Ranking = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    }}>
      <RankBox players={players} />
    </div >
  );
}

export default Ranking
