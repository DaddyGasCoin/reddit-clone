import { useParams } from "react-router-dom";

const DisplayRules = (props) => {
  const { data } = props
  const params = useParams();

  return (
    <div className="rules-box">
      <div className="rules-sub">r/{params.sub} Rules</div>
      {data.map((rule, index) => {
        return (<div className="rule-item" key={index}>{index + 1}. {rule.short_name}</div>)
      })}
    </div>
  )

}

export default DisplayRules