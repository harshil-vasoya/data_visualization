function DataShow({ data }) {
  return (
    <div className="w-[30vw] h-[40vh] overflow-x-auto p-2 rounded-md shadow-2xl bg-white m-1">
        <h2><b>Topic</b> - {data.topic}</h2>
      <h2><b>Title</b> - {data.title}</h2>
      <h2><b>Pestle</b> - {data.pestle}</h2>
      <h2><b>Region</b> - {data.region}</h2>
      <h2><b>sector</b> - {data.sector}</h2>
      <h2><b>Intensity</b> - {data.intensity}</h2>
      <h2><b>Insight</b> - {data.insight}</h2>
      <h2><b>Source</b> - {data.source}</h2>
      <h2><b>Country</b> - {data.country}</h2>
      <h2><b>end_year</b> - {data.end_year}</h2>



      



      
      <p>{data.content}</p>

      
    </div>
  )
}
export default DataShow;