enum FeatureStatus {
  planning,
  toDo,
  done
}

type FeatureProps = {
  title: String,
  description: String,
  successCriteria: Array<String>,
  tests: Array<String>,
  status: FeatureStatus,
  epicParentId: Number,
  isRequired: Boolean
}

export default function Feature({title, description,
    successCriteria, tests,
    status, epicParentId,
    isRequired }: FeatureProps ) {

    const successList = successCriteria.map(success =>
      <>
        <input type="checkbox" />
        <label>{success}</label>
      </>
    );
    
    const testList = tests.map(test =>
      <>
        <input type="checkbox" />
        <label>{test}</label>
      </>
    );

  return (
    <div className="FeatureRoot">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="FeatureList">
        {successList}
      </div>
      <div className="FeatureList">
        {testList}
      </div>
    </div>
  )
}