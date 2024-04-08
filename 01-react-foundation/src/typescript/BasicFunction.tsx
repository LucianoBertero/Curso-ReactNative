export const BasicFunction = () => {
  const addTwoNumber = (a: number, b: number) => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de sumar: {addTwoNumber(2, 3)}</span>
    </>
  );
};
