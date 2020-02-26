import { connect } from "react-redux";

import { RootState, Drone } from "../../types";
import DroneSummary from "./components";

interface OwnProps {
  id: string;
}

interface MappedProps {
  drone: Drone;
}

const mapStateToProps = (
  state: RootState,
  ownProps: OwnProps
): MappedProps => ({
  drone: state.drone[ownProps.id]
});

export default connect(mapStateToProps)(DroneSummary);
