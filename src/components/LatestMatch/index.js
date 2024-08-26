// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props

  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1>Latest Matches</h1>
      <div>
        <div>
          <div>
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="latest-match-team-logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="separator" />

        <div className="latest-match-details2">
          <p className="latest-match-details-label">First Innings</p>
          <p className="latest-match-details-value">{firstInnings}</p>
          <p className="latest-match-details-label">Second Innings</p>
          <p className="latest-match-details-value">{secondInnings}</p>
          <p className="latest-match-details-label">Man Of The Match</p>
          <p className="latest-match-details-value">{manOfTheMatch}</p>
          <p className="latest-match-details-label">Umpires</p>
          <p className="latest-match-details-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
