import { useMemo } from 'react'

export default function useFilteredProfessors({ professors, searchProfessor, searchByUniversity }) {
  const filtered = useMemo(() => {
    return professors.filter(prof =>
      prof.name.toLowerCase().includes(searchProfessor.toLowerCase()) &&
      (prof.university === searchByUniversity || searchByUniversity === "")
    );
  }, [professors, searchProfessor, searchByUniversity])

  return filtered
}
