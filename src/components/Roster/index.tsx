import { connect } from "react-redux";

import { Store } from "../../types";
import Roster from "./component";

interface MappedProps {
  slots: number;
  droneIds: string[];
}

const mapStateToProps = (state: Store): MappedProps => ({
  droneIds: Object.values(state.drone).map(drone => drone.id),
  slots: 12
});

export default connect(mapStateToProps)(Roster);
