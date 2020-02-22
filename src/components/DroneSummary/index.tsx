import { connect } from "react-redux";

import { StoreState, Drone } from "../../types";
import DroneSummary from "./components";

interface Props {
  id: string;
}

interface MappedProps {
  drone: Drone;
}

const mapStateToProps = (state: StoreState, ownProps: Props): MappedProps => ({
  drone: state.drone[ownProps.id]
});

export default connect(mapStateToProps)(DroneSummary);
