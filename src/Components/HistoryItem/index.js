import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistoryItem} = props

  const onDeleteHistoryItem = () => {
    deleteHistoryItem(historyItem.id)
  }
  return (
    <li className="history-item">
      <div className="history-item-details">
        <p>{historyItem.timeAccessed}</p>
        <img src={historyItem.logoUrl} alt="domain logo" />
        <p>{historyItem.title}</p>
        <p>{historyItem.domainUrl}</p>
      </div>
      <button
        onClick={onDeleteHistoryItem}
        data-testid="delete"
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
