import "./Grouping.css"

type GroupingProps = {
  title: string
}

export default function Grouping({ title }: GroupingProps) {

  return (
    <div className="GroupingRoot">
      <h2 className="GroupingTitle">{title}</h2>
    </div>
  )
}