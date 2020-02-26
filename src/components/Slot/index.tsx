import { connect } from "react-redux";

import { createDrone } from "../../actions";
import Slot from "./components";

const mapDispatchToProps = {
  createDrone
};

export default connect(undefined, mapDispatchToProps)(Slot);
