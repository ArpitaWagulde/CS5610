const square = (a: number) => a * a;
const plusOne = (a: number) => a + 1;

function FunctionParenthesisAndParameters() {
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);
  return (
    <>
      <h3>Parenthesis and parameters</h3>
      twoSquared = {twoSquared} <br />
      square(2) = {square(2)} <br />
      threePlusOne = {threePlusOne} <br />
      threePlusOne = {plusOne(3)} <br />
    </>
  );
}

export default FunctionParenthesisAndParameters;