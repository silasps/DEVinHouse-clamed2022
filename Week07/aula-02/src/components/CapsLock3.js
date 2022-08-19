export default function CapsLock3({ children, legal }) {
  const textoEmLetrasMaiusculas = children.toUpperCase()
  return <p>{textoEmLetrasMaiusculas}{legal}</p>
}
