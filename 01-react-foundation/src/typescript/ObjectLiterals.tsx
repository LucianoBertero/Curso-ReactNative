interface Person {
  firstName: string;
  age: number;
  lastName: string;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 25,
    firstName: "Luciano",
    lastName: "Bertero",
    address: {
      country: "Argentina",
      houseNo: 349,
    },
  };

  const { age } = person;
  return (
    <>
      <h3>Objetos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
