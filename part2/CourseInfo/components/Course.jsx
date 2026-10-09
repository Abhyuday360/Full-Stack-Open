const Course = ({ course }) => {
  return (
    <>
      {course.map(c => {
        const excer = c.parts.map(part => part.exercises)

        return (
          <div key={c.id}>
            <h1>{c.name}</h1>

            <ul>
              {c.parts.map(part =>
                <li key={part.id}>
                  {part.name} {part.exercises}
                </li>
              )}
            </ul>

            <p>
              Total number of exercises{" "}
              {excer.reduce((sum, number) => sum + number, 0)}
            </p>
          </div>
        )
      })}
    </>
  )
}

export default Course
