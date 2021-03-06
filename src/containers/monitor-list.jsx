import bindAll from 'lodash.bindall';
import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {moveMonitorRect} from '../reducers/monitor-layout';

import MonitorListComponent from '../components/monitor-list/monitor-list.jsx';

class MonitorList extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleMonitorChange'
        ]);
    }
    handleMonitorChange (id, x, y) { // eslint-disable-line no-unused-vars
        this.props.moveMonitorRect(id, x, y);
    }
    render () {
        return (
            <MonitorListComponent
                onMonitorChange={this.handleMonitorChange}
                {...this.props}
            />
        );
    }
}

MonitorList.propTypes = {
    moveMonitorRect: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    monitors: state.monitors
});
const mapDispatchToProps = dispatch => ({
    moveMonitorRect: (id, x, y) => dispatch(moveMonitorRect(id, x, y))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MonitorList);
