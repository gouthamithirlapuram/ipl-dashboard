import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingteamLogo, competingTeam, matchStatus, result} = matchDetails
  const getMatchStatusClassName = status =>
    status === 'won' ? 'match-won' : 'match-lost'
  const matchStatusClassNam = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`
  return (
    <li>
      <img src={competingteamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={matchStatusClassNam}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
