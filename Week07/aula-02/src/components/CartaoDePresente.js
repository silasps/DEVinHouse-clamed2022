export default function CartaoDePresente({ titulo, children}){

  return (
    <div>
      <h3>{titulo}</h3>
      <div style={{backgroundColor: 'red'}}>
        {children}
      </div>
    </div>
  )
}
