type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};
function Person({ name }: PersonProps) {
  return (
    <>
      <div>
        First Name: {name.first}
        Last Name: {name.last}
      </div>
    </>
  );
}

export default Person;
