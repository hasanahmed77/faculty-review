import { Typography, CircularProgress } from "@mui/material"
import { Link } from "react-router"
import ProfCard from "../Card/ProfCard"

// returns data based on different conditions
function DynamicContent({ error, loading, filteredProfessors }) {
  if (error) 
    return <Typography color="error">Server down - could not fetch data.</Typography>

  if (loading) 
    return <CircularProgress />
  
  if (filteredProfessors.length === 0) 
    return <Typography>Sorry, not available.</Typography>
  
  return (
    <>
      {filteredProfessors.map((prof) => (
        <Link
          key={prof.id}
          to={`/${prof.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ProfCard {...prof} />
        </Link>
      ))}
    </>
  )
}

export default DynamicContent
