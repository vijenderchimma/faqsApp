// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onClickIcon = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {isActive} = this.state
    const {questionText} = faqDetails
    const altText = isActive ? 'minus' : 'plus'
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    return (
      <li className="list-item">
        <div className="question-icon-container">
          <h1 className="question-text">{questionText}</h1>
          <button
            type="button"
            className="icon-button"
            onClick={this.onClickIcon}
          >
            <img src={imgUrl} alt={altText} />
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
