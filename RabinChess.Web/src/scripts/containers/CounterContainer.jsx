import { connect } from 'react-redux'
import { increment } from '../actions/index.jsx'
import CustomButton from '../components/CustomButton.jsx'

const mapStateToProps = (state) => {
  return {
    label: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(increment())
    }
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomButton)

export default CounterContainer
