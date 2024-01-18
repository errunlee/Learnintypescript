type ListType = {
  persons: { name: string }[];
};

function PersonList({ persons }: ListType) {
  return (
    <>
      <h1>Person Names</h1>
      {persons.map((person) => (
        <p key={person.name}>{person.name} </p>
      ))}
    </>
  );
}

export default PersonList;
