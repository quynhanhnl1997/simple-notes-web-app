interface NotificationProps {
  message: string;
}

const Notification: React.FunctionComponent<NotificationProps> = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

export default Notification