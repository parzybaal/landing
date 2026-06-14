type RedirectToastProps = {
  icon: string
  message: string
}

function RedirectToast({ icon, message }: RedirectToastProps) {
  return (
    <div className="redirectToast" role="status" aria-live="polite">
      <span className="redirectToastIcon" aria-hidden="true">
        {icon}
      </span>
      <p className="redirectToastText">{message}</p>
    </div>
  )
}

export default RedirectToast
