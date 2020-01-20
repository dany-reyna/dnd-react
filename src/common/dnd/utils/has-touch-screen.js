function hasTouchScreen() {
  const mqList = matchMedia?.('(pointer:coarse)');
  const UA = navigator.userAgent;

  return (
    navigator?.maxTouchPoints > 0 ||
    navigator?.msMaxTouchPoints > 0 ||
    mqList.matches ||
    'orientation' in window ||
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
  );
}

export default hasTouchScreen;
