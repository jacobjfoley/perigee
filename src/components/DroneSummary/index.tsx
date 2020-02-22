import { connect } from "react-redux";

import { Store, Drone } from "../../types";
import DroneSummary from "./components";

interface Props {
  id: string;
}

interface MappedProps {
  drone: Drone;
}

const mapStateToProps = (state: Store, ownProps: Props): MappedProps => ({
  drone: state.drone[ownProps.id]
});

export default connect(mapStateToProps)(DroneSummary);
