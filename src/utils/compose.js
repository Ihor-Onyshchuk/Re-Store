import { connect } from "react-redux";

const compose = (...funcs) => {
  return funcs.reduceRight((wrraped, f) => f(wrraped), comp);
};

export default compose;
