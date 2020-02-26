import { connect } from "react-redux";

import { createDrone } from "../../actions";
import Slot from "./components";

interface DispatchProps {
  createDrone: () => void;
}

const mapDispatchToProps = {
  createDrone
};

export default connect<undefined, DispatchProps>(
  undefined,
  mapDispatchToProps
)(Slot);
