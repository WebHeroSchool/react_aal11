import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class InputItem extends React.Component {
		state = {
					inputValue: ''
			}	;
		render () {
				const { onClickAdd } = this.props;

		return (<Grid>
		    <TextField
		        id="standard-basic"
		        label="Добавить задание"
		        className={styles.root}
		        value={this.state.inputValue}
		        InputProps={{className: styles.root}}
		        onChange={event => this.setState({ inputValue: event.target.value })} 
		    />
		    <Button
		        variant="contained"
		        color='primary'
		        fullWidth		        
		        onClick={onClickAdd}
		    >
		       	Добавить
		    </Button>
	   </Grid>);
				
			}
	}


export default InputItem;
// export default withStyles(styles)(InputItem);
