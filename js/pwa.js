export const installSW = () => {
  if(!hasServiceWorker())
    return;

  navigator
    .serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log(`SW registration successful with scope: ${registration.scope}`);
    }).catch(console.log);
}

const hasServiceWorker = () => {
  if(navigator.serviceWorker)
    return true;
  return false;
}
