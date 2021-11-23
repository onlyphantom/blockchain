export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `The learning portal has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}