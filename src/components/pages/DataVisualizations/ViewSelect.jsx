import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { colors } from '../../../styles/data_vis_colors';

const { background_color } = colors;

function ViewSelect(props) {
  const history = useHistory();
  const { set_view } = props;
  let { office } = useParams();
  function update_view(view, office) {
    set_view(view);
    history.push(`/graphs/${office ? office : 'all'}/${view}`);
  }
  return (
    <div
      className="view-select-container"
      style={{
        backgroundColor: background_color,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        minHeight: '100px',
        marginTop: '-250px',
        marginLeft: '40px',
      }}
    >
      <Button onClick={() => update_view('time-series', office)}>
        Time Series
      </Button>
      {office ? (
        ''
      ) : (
        <Button onClick={() => update_view('office-heat-map', office)}>
          USCIS Asylum Offices Heat Map
        </Button>
      )}
      <Button onClick={() => update_view('citizenship', office)}>
        Citizenship of Asylum Seeker
      </Button>
    </div>
  );
}

export default ViewSelect;