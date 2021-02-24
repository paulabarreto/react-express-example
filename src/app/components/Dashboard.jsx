/**
 * The dashboard is a simple React component that contains several lists of tasks,
 * one for each group that belongs to the user.
 */

import { connect } from 'react-redux';
import React from 'react';
import { ConnectedTaskList } from './TaskList';

const Dashboard = ({groups})=>(
    <div>
        <h2>Dashboard</h2>
        {groups.map(group=>(
            <ConnectedTaskList key={group.id} {...group}/>
            // <div key={group.id}>{group.name}</div>
        ))}
    </div>
);

function mapStateToProps(state) {
    return {
        groups: state.groups
    }
}

// const mapStateToProps = ({groups})=>({groups});

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);