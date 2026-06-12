type RedirectToastProps = {
  message: string
}

function RedirectToast({ message }: RedirectToastProps) {
  return (
    <div className="redirectToast" role="status" aria-live="polite">
      <span className="redirectToastIcon" aria-hidden="true">
        💬
      </span>
      <p className="redirectToastText">{message}</p>
    </div>
  )
}

export default RedirectToast
