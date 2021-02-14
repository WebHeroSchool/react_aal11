import React from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";
import styles from './Item.module.css';


class Item extends React.Component {
    state = {
        task: this.props.task
    };

    onChangeTask = e => {
        this.setState ({
            task: e.currentTarget.value
        });
        this.props.onChangeItem(this.props.id, e.currentTarget.value);
    };

  render() {
    const { id, disabled, isDone } = this.props;

    return (
            <input
                type='text'
                className={
                    classnames({
                        [styles.item]: true,
                        [styles.done]: isDone,
                        [styles.edit_mode]: !disabled && !isDone
                    })}
                value={this.state.task}
                id={id}
                disabled={disabled}
                onChange={this.onChangeTask}
            />);
    }
}
       //color="primary"

Item.propTypes = {
  isDone: PropTypes.bool.isRequired,
  task: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
        PropTypes.symbol.isRequired
  ])
}

export default Item;