import { connect } from "react-redux";

import { StoreState } from "../../types";
import Roster from "./component";

interface MappedProps {
  slots: number;
  droneIds: string[];
}

const mapStateToProps = (state: StoreState): MappedProps => ({
  droneIds: Object.values(state.drone).map(drone => drone.id),
  slots: 12
});

export default connect(mapStateToProps)(Roster);
